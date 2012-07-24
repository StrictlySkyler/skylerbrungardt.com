(function(N) {
  N.buildEditor = function(id) {
    var textareaId = id + '-textarea'
    , textarea = document.getElementById(textareaId)
    , toolbar = document.createElement('div')
    , styleSheet = document.styleSheets[0].href
    ;
    
    toolbar.style.display = 'none';
    toolbar.id = id + '-toolbar';
    toolbar.className = 'wysiwyg-toolbar';
    toolbar.innerHTML =
      '<button class="editor-control bold-toggle button"'
    +   'title="Bold Text (control+b)"'
    +   'data-wysihtml5-command="bold">'
    + '</button>'
    + '<button class="editor-control italic-toggle button"'
    +   'title="Italicize Text (ctrl+i)"'
    +   'data-wysihtml5-command="italic">'
    + '</button>'
    + '<button class="editor-control underline-toggle button"'
    +   'title="Underline Text (ctrl+u)"'
    +   'data-wysihtml5-command="underline">'
    + '</button>'
    + '<button class="editor-control bullet-toggle button"'
    +   'title="Insert Bullets"'
    +   'data-wysihtml5-command="insertUnorderedList">'
    + '</button>'
    + '<button class="editor-control list-toggle button"'
    +   'title="Insert List"'
    +   'data-wysihtml5-command="insertOrderedList">'
    + '</button>'
    + '<button class="editor-control link-toggle button"'
    +   'title="Create A Link"'
    +   'data-wysihtml5-command="createLink">'
    + '</button>'
    + '<div data-wysihtml5-dialog="createLink"'
    +   'class="create-link-dialog wysiwyg-popout"'
    +   'style="display: none;">'
    +   '<label>'
    +     'Link:'
    +     '<input data-wysihtml5-dialog-field="href" value="http://">'
    +   '</label>'
    +   '<button class="editor-control sub-control ok button"'
    +     'data-wysihtml5-dialog-action="save">'
    +     'OK'
    +   '</button>'
    +   '<button class="editor-control sub-control cancel button"'
    +     'data-wysihtml5-dialog-action="cancel">'
    +     'Cancel'
    +   '</button>'
    + '</div>'
    + '<button class="editor-control small-text-toggle button"'
    +   'title="Make Text Small"'
    +   'data-wysihtml5-command="fontSize"'
    +   'data-wysihtml5-command-value="small">'
    + '</button>'
    + '<button class="editor-control large-text-toggle button"'
    +   'title="Make Text Large"'
    +   'data-wysihtml5-command="fontSize"'
    +   'data-wysihtml5-command-value="large">'
    + '</button>'
    + '<button class="editor-control insert-image-toggle button"'
    +   'title="Insert an image"'
    +   'data-wysihtml5-command="insertImage">'
    + '</button>'
    + '<div data-wysihtml5-dialog="insertImage"'
    +   'class="insert-image-dialog wysiwyg-popout"'
    +   'style="display: none;">'
    +   '<label>'
    +     'Image:'
    +     '<input data-wysihtml5-dialog-field="src" value="http://">'
    +   '</label>'
    +   '<label>'
    +     'Description (alt-text):'
    +     '<input data-wysihtml5-dialog-field="alt">'
    +   '</label>'
    +   '<button class="editor-control sub-control ok button"'
    +     'title="Insert this image"'
    +     'data-wysihtml5-dialog-action="save">'
    +     'OK'
    +   '</button>'
    +   '<button class="editor-control sub-control cancel button"'
    +     'title="Cancel inserting an image"'
    +     'data-wysihtml5-dialog-action="cancel">'
    +     'Cancel'
    +   '</button>'
    + '</div>'
    + '<button class="editor-control justify-center-toggle button"'
    +   'title="Align Text to the Center"'
    +   'data-wysihtml5-command="justifyCenter">'
    + '</button>'
    + '<button class="editor-control justify-left-toggle button"'
    +   'title="Align Text to the Left"'
    +   'data-wysihtml5-command="justifyLeft">'
    + '</button>'
    + '<button class="editor-control justify-right-toggle button"'
    +   'title="Align Text to the Right"'
    +   'data-wysihtml5-command="justifyRight">'
    + '</button>'
    + '<button class="editor-control show-html-toggle button"'
    +   'title="Show Raw HTML"'
    +   'data-wysihtml5-action="change_view">'
    + '</button>'
    ;
    textarea.parentNode.insertBefore(toolbar, textarea);
    
    var editor = new wysihtml5.Editor(textareaId, {
      name: 'wysiwyg',
      style: true,
      toolbar: id + '-toolbar',
      autoLink: true,
      parserRules: wysihtml5ParserRules,
      parser: wysihtml5.dom.parse || Prototype.K,
      composerClassName: 'wysihtml5-editor',
      bodyClassName: 'wysihtml5-supported',
      stylesheets: [styleSheet],
      placeholderText: null,
      allowObjectResizing: true,
      supportTouchDevices: true
    });
    
  };
}(nooline));