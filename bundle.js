(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _md = _interopRequireDefault(require("md"));

// re export components
// export { default as AppShell } from './components/app-shell.js'
// install them
// customElements.define('app-shell', AppShell)
console.log(md);

},{"@babel/runtime/helpers/interopRequireDefault":2,"md":4}],2:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

},{}],3:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof4 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function _typeof2(obj) {
  if (typeof Symbol === "function" && (0, _typeof4.default)[Symbol.iterator] === "symbol") {
    _typeof2 = function _typeof2(obj) {
      return (0, _typeof4.default)(obj);
    };
  } else {
    _typeof2 = function _typeof2(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : (0, _typeof4.default)[obj];
    };
  }

  return _typeof2(obj);
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

},{"@babel/runtime/helpers/interopRequireDefault":2,"@babel/runtime/helpers/typeof":3}],4:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function _interopDefault(ex) {
  return ex && (0, _typeof2.default)(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var slugo = _interopDefault(require('slugo'));

function merge(obj) {
  var arguments$1 = arguments;
  var i = 1;
  var target;
  var key;

  for (; i < arguments.length; i++) {
    target = arguments$1[i];

    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function noop() {}

noop.exec = noop;

function escape(html, encode) {
  return html.replace(encode ? /&/g : /&(?!#?\w+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function (_, n) {
    n = n.toLowerCase();

    if (n === 'colon') {
      return ':';
    }

    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(Number(n.substring(1)));
    }

    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) {
      return new RegExp(regex, opt);
    }

    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

var highlightLinesRe = /{([\d,-]+)}/;

var Renderer = function Renderer(options) {
  this.options = options || {};
  this._headings = [];
};

Renderer.prototype.code = function code(code$1, lang, escaped) {
  var dataLine = '';

  if (this.options.dataLine && lang && highlightLinesRe.test(lang)) {
    dataLine = " data-line=\"" + highlightLinesRe.exec(lang)[1] + "\"";
    lang = lang.substr(0, lang.indexOf('{'));
  }

  if (this.options.highlight) {
    var out = this.options.highlight(code$1, lang);

    if (out !== null && out !== code$1) {
      escaped = true;
      code$1 = out;
    }
  }

  if (!lang) {
    return "<pre" + dataLine + "><code>" + (escaped ? code$1 : escape(code$1, true)) + "\n</code></pre>";
  }

  return "<pre" + dataLine + "><code class=\"" + this.options.langPrefix + escape(lang, true) + "\">" + (escaped ? code$1 : escape(code$1, true)) + "\n</code></pre>\n";
};

Renderer.prototype.blockquote = function blockquote(quote) {
  return "<blockquote>\n" + quote + "</blockquote>\n";
};

Renderer.prototype.html = function html(html$1) {
  return html$1;
};

Renderer.prototype.heading = function heading(text, level, raw) {
  var slug = slugo(raw);

  var count = this._headings.filter(function (h) {
    return h === raw;
  }).length;

  if (count > 0) {
    slug += "-" + count;
  }

  this._headings.push(raw);

  return "<h" + level + " id=\"" + this.options.headerPrefix + slug + "\">" + text + "</h" + level + ">\n";
};

Renderer.prototype.hr = function hr() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function list(body, ordered, taskList) {
  var type = ordered ? 'ol' : 'ul';
  var classNames = taskList ? ' class="task-list"' : '';
  return "<" + type + classNames + ">\n" + body + "</" + type + ">\n";
};

Renderer.prototype.listitem = function listitem(text, checked) {
  if (checked === undefined) {
    return "<li>" + text + "</li>\n";
  }

  return '<li class="task-list-item">' + '<input type="checkbox" class="task-list-item-checkbox"' + (checked ? ' checked' : '') + '> ' + text + '</li>\n';
};

Renderer.prototype.paragraph = function paragraph(text) {
  return "<p>" + text + "</p>\n";
};

Renderer.prototype.table = function table(header, body) {
  return "<table>\n<thead>\n" + header + "</thead>\n<tbody>\n" + body + "</tbody>\n</table>\n";
};

Renderer.prototype.tablerow = function tablerow(content) {
  return "<tr>\n" + content + "</tr>\n";
};

Renderer.prototype.tablecell = function tablecell(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align ? "<" + type + " style=\"text-align:" + flags.align + "\">" : "<" + type + ">";
  return tag + content + "</" + type + ">\n";
}; // span level renderer


Renderer.prototype.strong = function strong(text) {
  return "<strong>" + text + "</strong>";
};

Renderer.prototype.em = function em(text) {
  return "<em>" + text + "</em>";
};

Renderer.prototype.codespan = function codespan(text) {
  return "<code>" + text + "</code>";
};

Renderer.prototype.br = function br() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function del(text) {
  return "<del>" + text + "</del>";
};

Renderer.prototype.link = function link(href, title, text) {
  if (this.options.sanitize) {
    var prot;

    try {
      prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, '').toLowerCase();
    } catch (err) {
      return '';
    }

    if ( // eslint-disable-next-line no-script-url
    prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      // eslint-disable-line no-script-url
      return '';
    }
  }

  var out = "<a href=\"" + href + "\"";

  if (title) {
    out += " title=\"" + title + "\"";
  }

  var ref = this.options;
  var linksInNewTab = ref.linksInNewTab;
  var targetBlank = linksInNewTab === true || typeof linksInNewTab === 'function' && linksInNewTab(href);

  if (targetBlank) {
    out += " target=\"_blank\"";
  }

  out += ">" + text + "</a>";
  return out;
};

Renderer.prototype.image = function image(href, title, text) {
  var out = "<img src=\"" + href + "\" alt=\"" + text + "\"";

  if (title) {
    out += " title=\"" + title + "\"";
  }

  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function text(text$1) {
  return text$1;
};

var defaultOptions = {
  gfm: true,
  tables: true,
  taskLists: true,
  dataLine: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer(),
  xhtml: false
};
/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<![_*`]| {2,}\n|$)/
};
inline._inside = /(?:\[[^\]]*\]|[^[\]]|\](?=[^[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;
inline.link = replace(inline.link)('inside', inline._inside)('href', inline._href)();
inline.reflink = replace(inline.reflink)('inside', inline._inside)();
/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);
/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});
/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)(']|', '~]|')('|', '|https?://|')()
});
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

var InlineLexer = function InlineLexer(links, options) {
  if (options === void 0) options = defaultOptions;
  this.options = options;
  this.links = links;
  this.renderer = this.options.renderer || new Renderer();
  this.renderer.options = this.options;

  if (!this.links) {
    throw new Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  } else {
    this.rules = inline.normal;
  }
};

InlineLexer.output = function output(src, links, options) {
  return new InlineLexer(links, options).output(src);
};

InlineLexer.prototype.output = function output(src) {
  var this$1 = this;
  var out = '';
  var link;
  var text;
  var href;
  var cap;

  while (src) {
    // escape
    if (cap = this$1.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    } // autolink


    if (cap = this$1.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);

      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':' ? this$1.mangle(cap[1].substring(7)) : this$1.mangle(cap[1]);
        href = this$1.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }

      out += this$1.renderer.link(href, null, text);
      continue;
    } // url (gfm)


    if (!this$1.inLink && (cap = this$1.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this$1.renderer.link(href, null, text);
      continue;
    } // tag


    if (cap = this$1.rules.tag.exec(src)) {
      if (!this$1.inLink && /^<a /i.test(cap[0])) {
        this$1.inLink = true;
      } else if (this$1.inLink && /^<\/a>/i.test(cap[0])) {
        this$1.inLink = false;
      }

      src = src.substring(cap[0].length);
      out += this$1.options.sanitize ? this$1.options.sanitizer ? this$1.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
      continue;
    } // link


    if (cap = this$1.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this$1.inLink = true;
      out += this$1.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this$1.inLink = false;
      continue;
    } // reflink, nolink


    if ((cap = this$1.rules.reflink.exec(src)) || (cap = this$1.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this$1.links[link.toLowerCase()];

      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }

      this$1.inLink = true;
      out += this$1.outputLink(cap, link);
      this$1.inLink = false;
      continue;
    } // strong


    if (cap = this$1.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this$1.renderer.strong(this$1.output(cap[2] || cap[1]));
      continue;
    } // em


    if (cap = this$1.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this$1.renderer.em(this$1.output(cap[2] || cap[1]));
      continue;
    } // code


    if (cap = this$1.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this$1.renderer.codespan(escape(cap[2], true));
      continue;
    } // br


    if (cap = this$1.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this$1.renderer.br();
      continue;
    } // del (gfm)


    if (cap = this$1.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this$1.renderer.del(this$1.output(cap[1]));
      continue;
    } // text


    if (cap = this$1.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += this$1.renderer.text(escape(this$1.smartypants(cap[0])));
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

InlineLexer.prototype.outputLink = function outputLink(cap, link) {
  var href = escape(link.href);
  var title = link.title ? escape(link.title) : null;
  return cap[0].charAt(0) === '!' ? this.renderer.image(href, title, escape(cap[1])) : this.renderer.link(href, title, this.output(cap[1]));
};

InlineLexer.prototype.smartypants = function smartypants(text) {
  if (!this.options.smartypants) {
    return text;
  }

  return text // em-dashes
  .replace(/---/g, "\u2014") // en-dashes
  .replace(/--/g, "\u2013") // opening singles
  .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
  .replace(/'/g, "\u2019") // opening doubles
  .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
  .replace(/"/g, "\u201D") // ellipses
  .replace(/\.{3}/g, "\u2026");
};

InlineLexer.prototype.mangle = function mangle(text) {
  if (!this.options.mangle) {
    return text;
  }

  var out = '';
  var i = 0;
  var ch;

  for (; i < text.length; i++) {
    ch = text.charCodeAt(i);

    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }

    out += '&#' + ch + ';';
  }

  return out;
};

InlineLexer.rules = inline;
/**
 * Parsing & Compiling
 */

var Parser = function Parser(options) {
  if (options === void 0) options = defaultOptions;
  this.tokens = [];
  this.token = null;
  this.options = options;
  this.options.renderer = this.options.renderer || new Renderer();
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
};

Parser.parse = function parse(src, options, renderer) {
  return new Parser(options, renderer).parse(src);
};
/**
 * Parse Loop
 */


Parser.prototype.parse = function parse(src) {
  var this$1 = this;
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();
  var out = '';

  while (this.next()) {
    out += this$1.tok();
  } // Remove cached headings


  this.renderer._headings = [];
  return out;
};
/**
 * Next Token
 */


Parser.prototype.next = function next() {
  this.token = this.tokens.pop();
  return this.token;
};
/**
 * Preview Next Token
 */


Parser.prototype.peek = function peek() {
  return this.tokens[this.tokens.length - 1] || 0;
};
/**
 * Parse Text Tokens
 */


Parser.prototype.parseText = function parseText() {
  var this$1 = this;
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += "\n" + this$1.next().text;
  }

  return this.inline.output(body);
};
/**
 * Parse Current Token
 */


Parser.prototype.tok = function tok() {
  var this$1 = this;

  switch (this.token.type) {
    case 'space':
      {
        return '';
      }

    case 'hr':
      {
        return this.renderer.hr();
      }

    case 'heading':
      {
        return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
      }

    case 'code':
      {
        return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
      }

    case 'table':
      {
        var header = '';
        var body = '';
        var i;
        var row;
        var cell;
        var j; // header

        cell = '';

        for (i = 0; i < this.token.header.length; i++) {
          cell += this$1.renderer.tablecell(this$1.inline.output(this$1.token.header[i]), {
            header: true,
            align: this$1.token.align[i]
          });
        }

        header += this.renderer.tablerow(cell);

        for (i = 0; i < this.token.cells.length; i++) {
          row = this$1.token.cells[i];
          cell = '';

          for (j = 0; j < row.length; j++) {
            cell += this$1.renderer.tablecell(this$1.inline.output(row[j]), {
              header: false,
              align: this$1.token.align[j]
            });
          }

          body += this$1.renderer.tablerow(cell);
        }

        return this.renderer.table(header, body);
      }

    case 'blockquote_start':
      {
        var body$1 = '';

        while (this.next().type !== 'blockquote_end') {
          body$1 += this$1.tok();
        }

        return this.renderer.blockquote(body$1);
      }

    case 'list_start':
      {
        var body$2 = '';
        var taskList = false;
        var ordered = this.token.ordered;

        while (this.next().type !== 'list_end') {
          if (this$1.token.checked !== undefined) {
            taskList = true;
          }

          body$2 += this$1.tok();
        }

        return this.renderer.list(body$2, ordered, taskList);
      }

    case 'list_item_start':
      {
        var body$3 = '';
        var checked = this.token.checked;

        while (this.next().type !== 'list_item_end') {
          body$3 += this$1.token.type === 'text' ? this$1.parseText() : this$1.tok();
        }

        return this.renderer.listitem(body$3, checked);
      }

    case 'loose_item_start':
      {
        var body$4 = '';
        var checked$1 = this.token.checked;

        while (this.next().type !== 'list_item_end') {
          body$4 += this$1.tok();
        }

        return this.renderer.listitem(body$4, checked$1);
      }

    case 'html':
      {
        var html = !this.token.pre && !this.options.pedantic ? this.inline.output(this.token.text) : this.token.text;
        return this.renderer.html(html);
      }

    case 'paragraph':
      {
        return this.renderer.paragraph(this.inline.output(this.token.text));
      }

    case 'text':
      {
        return this.renderer.paragraph(this.parseText());
      }

    default:
      {
        throw new Error('Unknow type');
      }
  }
};

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};
block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')(/bull/g, block.bullet)();
block.list = replace(block.list)(/bull/g, block.bullet)('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')('def', '\\n+(?=' + block.def.source + ')')();
block.blockquote = replace(block.blockquote)('def', block.def)();
block._tag = '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code' + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo' + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';
block.html = replace(block.html)('comment', /<!--[\s\S]*?-->/)('closed', /<(tag)[\s\S]+?<\/\1>/)('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, block._tag)();
block.paragraph = replace(block.paragraph)('hr', block.hr)('heading', block.heading)('lheading', block.lheading)('blockquote', block.blockquote)('tag', '<' + block._tag)('def', block.def)();
/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);
/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/,
  checkbox: /^\[([ x])\] +/
});
block.gfm.paragraph = replace(block.paragraph)('(?!', '(?!' + block.gfm.fences.source.replace('\\1', '\\2') + '|' + block.list.source.replace('\\1', '\\3') + '|')();
/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

var Lexer = function Lexer(options) {
  if (options === void 0) options = defaultOptions;
  this.tokens = [];
  this.tokens.links = {};
  this.options = options;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  } else {
    this.rules = block.normal;
  }
};

Lexer.lex = function lex(src, options) {
  return new Lexer(options).lex(src);
};

Lexer.prototype.lex = function lex(src) {
  src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ').replace(/\u00a0/g, ' ').replace(/\u2424/g, '\n');
  return this.token(src, true);
};

Lexer.prototype.token = function token(src, top, bq) {
  var this$1 = this;
  src = src.replace(/^ +$/gm, '');
  var next;
  var loose;
  var cap;
  var bull;
  var b;
  var item;
  var space;
  var i;
  var l;
  var checked;

  while (src) {
    // newline
    if (cap = this$1.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);

      if (cap[0].length > 1) {
        this$1.tokens.push({
          type: 'space'
        });
      }
    } // code


    if (cap = this$1.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this$1.tokens.push({
        type: 'code',
        text: this$1.options.pedantic ? cap : cap.replace(/\n+$/, '')
      });
      continue;
    } // fences (gfm)


    if (cap = this$1.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this$1.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3] || ''
      });
      continue;
    } // heading


    if (cap = this$1.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this$1.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    } // table no leading pipe (gfm)


    if (top && (cap = this$1.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);
      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this$1.tokens.push(item);
      continue;
    } // lheading


    if (cap = this$1.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this$1.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    } // hr


    if (cap = this$1.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this$1.tokens.push({
        type: 'hr'
      });
      continue;
    } // blockquote


    if (cap = this$1.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);
      this$1.tokens.push({
        type: 'blockquote_start'
      });
      cap = cap[0].replace(/^ *> ?/gm, ''); // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.

      this$1.token(cap, top, true);
      this$1.tokens.push({
        type: 'blockquote_end'
      });
      continue;
    } // list


    if (cap = this$1.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];
      this$1.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      }); // Get each top-level item.

      cap = cap[0].match(this$1.rules.item);
      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i]; // Remove the list item's bullet
        // so it is seen as the next token.

        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        if (this$1.options.gfm && this$1.options.taskLists) {
          checked = this$1.rules.checkbox.exec(item);

          if (checked) {
            checked = checked[1] === 'x';
            item = item.replace(this$1.rules.checkbox, '');
          } else {
            checked = undefined;
          }
        } // Outdent whatever the
        // list item contains. Hacky.


        if (item.indexOf('\n ') !== -1) {
          space -= item.length;
          item = this$1.options.pedantic ? item.replace(/^ {1,4}/gm, '') : item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '');
        } // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.


        if (this$1.options.smartLists && i !== l - 1) {
          b = this$1.rules.bullet.exec(cap[i + 1])[0];

          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        } // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.


        loose = next || /\n\n(?!\s*$)/.test(item);

        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';

          if (!loose) {
            loose = next;
          }
        }

        this$1.tokens.push({
          checked: checked,
          type: loose ? 'loose_item_start' : 'list_item_start'
        }); // Recurse.

        this$1.token(item, false, bq);
        this$1.tokens.push({
          type: 'list_item_end'
        });
      }

      this$1.tokens.push({
        type: 'list_end'
      });
      continue;
    } // html


    if (cap = this$1.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this$1.tokens.push({
        type: this$1.options.sanitize ? 'paragraph' : 'html',
        pre: !this$1.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    } // def


    if (!bq && top && (cap = this$1.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this$1.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    } // table (gfm)


    if (top && (cap = this$1.rules.table.exec(src))) {
      src = src.substring(cap[0].length);
      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].replace(/^ *\| *| *\| *$/g, '').split(/ *\| */);
      }

      this$1.tokens.push(item);
      continue;
    } // top-level paragraph


    if (top && (cap = this$1.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this$1.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
      });
      continue;
    } // text


    if (cap = this$1.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this$1.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

Lexer.rules = block;

function md(src, opt) {
  try {
    if (opt) {
      opt = merge({}, defaultOptions, opt);
    }

    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (err) {
    err.message += '\nPlease report this to https://github.com/egoist/md.';

    if ((opt || defaultOptions).silent) {
      return '<p>An error occurred:</p><pre>' + escape(String(err.message), true) + '</pre>';
    }

    throw err;
  }
}

md.Renderer = Renderer;
md.Parser = Parser;
md.Lexer = Lexer;
md.InlineLexer = InlineLexer;
module.exports = md;

},{"@babel/runtime/helpers/interopRequireDefault":2,"@babel/runtime/helpers/typeof":3,"slugo":5}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : (0, _typeof2.default)(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.slugo = factory();
})(window, function () {
  'use strict';

  function index(input) {
    return input // Remove html tags
    .replace(/<(?:.|\n)*?>/gm, '') // Remove special characters
    .replace(/[!\"#$%&'\(\)\*\+,\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '') // eslint-disable-line no-useless-escape
    // Replace dots and spaces with a short dash
    .replace(/(\s|\.)/g, '-') // Replace long dash with two short dashes
    .replace(/—/g, '--') // Make the whole thing lowercase
    .toLowerCase();
  }

  return index;
});

},{"@babel/runtime/helpers/interopRequireDefault":2,"@babel/runtime/helpers/typeof":3}]},{},[1]);
