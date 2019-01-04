import isUrl from 'is-url';
import needle from 'needle';
const getExtension = name =>
  name
    .split('.')
    .pop()
    .toLowerCase();

const isAllowedImage = (allowedImageTypes, extension = '') => allowedImageTypes.includes(extension);

const fetchRemoteExtension = async url => {
  try {
    const { headers } = await needle('get', url);
    return headers['content-type'].split('/').pop();
  } catch (error) {
    throw error;
  }
};

const removeQueryParams = url => url.split(/[?#]/)[0];

export default function PasteUrlImagify(options = {}) {
  const { insertPastedImage = 'insertPastedImage', allowedImageTypes = ['jpg', 'jpeg', 'png', 'gif', 'svg'] } = options;
  if (insertPastedImage === '' || !Array.isArray(allowedImageTypes)) {
    throw new Error('"allowedImageTypes" must be an array');
  }
  return {
    async onCommand(command, editor, next) {
      const { type, args } = command;
      let url;
      if (
        (type === 'insertText' && isUrl((url = args[0]))) ||
        (type === 'insertFragment' && isUrl((url = args[0].text)))
      ) {
        const urlWithoutParams = removeParams(url);
        try {
          if (isAllowedImage(allowedImageTypes, getExtension(urlWithoutParams))) {
            editor.command(insertPastedImage, urlWithoutParams).moveToEnd();
            return;
          }

          const remoteExtension = await fetchRemoteExtension(url);
          if (isAllowedImage(allowedImageTypes, remoteExtension)) {
            editor.command(insertPastedImage, url).moveToEnd();
            return;
          }
          next();
        } catch (exception) {
          console.log('error in PasteImagify', exception);
          next();
        }
      }
      next();
    }
  };
}
