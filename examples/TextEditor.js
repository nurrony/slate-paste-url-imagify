import React, { Component } from 'react';
import { Value } from 'slate';
import { Editor } from 'slate-react';
import PasteUrlImagify from '../src';
import initialValue from './value.json';

const schema = {
  blocks: {
    image: {
      isVoid: true
    }
  }
};

/**
 * Define the default node type.
 *
 * @type {String}
 */
const DEFAULT_NODE = 'paragraph';

/**
 * TextEditor.
 *
 * @type {Component}
 */
class TextEditor extends Component {
  plugins = [PasteUrlImagify()];

  commands = {
    insertPastedImage(editor, url) {
      editor
        .insertBlock({
          type: 'image',
          data: { src: url }
        })
        .insertBlock(DEFAULT_NODE)
        .moveToStartOfNextText()
        .focus();
    }
  };

  state = {
    value: Value.fromJSON(initialValue)
  };

  onChange = ({ value }) => {
    this.setState({ value });
  };

  render() {
    return (
      <Editor
        value={this.state.value}
        plugins={this.plugins}
        commands={this.commands}
        onChange={this.onChange}
        renderNode={this.renderNode}
        schema={schema}
      />
    );
  }

  renderNode(props, next) {
    const { node, attributes, children } = props;
    switch (node.type) {
      case 'link':
        return (
          <img {...attributes} href={node.data.get('url')}>
            {children}
          </img>
        );
      default:
        return next();
    }
  }
}

/**
 * Export.
 *
 * @type {Component}
 */

export default TextEditor;
