export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
    expanded: true
  },

  layout: 'fullscreen',
  html: {
    root: '#story' // target id for html tab (should be direct parent of <Story /> for easy copy/paste)
  }
}

import '../../src/docs.scss'
import '../../src/index.scss'
import '../../src/base/index.scss'
// import '../../src/color-modes/native.scss'
// import '../../src/color-modes/index.scss'
// import '../../src/core/index.scss'
// import '../../src/product/index.scss'
// import '../../src/marketing/index.scss'

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Switch themes',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'light_protanopia', 'dark', 'dark_dimmed', 'dark_high_contrast', 'dark_protanopia', 'all'],
      showName: true
    }
  }
}

export const decorators = [
  (Story, context) => {
    if (context.globals.theme === 'all') {
      return (
        <div class="theme-wrap">
          <div data-color-mode="light" data-light-theme="light" className="story-wrap" id="story">
            <Story {...context} />
          </div>

          <div data-color-mode="light" data-light-theme="light_protanopia" className="story-wrap" id="story">
            <Story {...context} />
          </div>

          <div data-color-mode="dark" data-dark-theme="dark" className="story-wrap" id="story">
            <Story {...context} />
          </div>

          <div data-color-mode="dark" data-dark-theme="dark_dimmed" className="story-wrap" id="story">
            <Story {...context} />
          </div>

          <div data-color-mode="dark" data-dark-theme="dark_high_contrast" className="story-wrap" id="story">
            <Story {...context} />
          </div>

          <div data-color-mode="dark" data-dark-theme="dark_protanopia" className="story-wrap" id="story">
            <Story {...context} />
          </div>
        </div>
      )
    }

    if (context.globals.theme === 'light') {
      return (
        <div data-color-mode="light" data-light-theme="light" className="story-wrap" id="story">
          <Story {...context} />
        </div>
      )
    }

    if (context.globals.theme === 'light_protanopia') {
      return (
        <div data-color-mode="light" data-light-theme="light_protanopia" className="story-wrap" id="story">
          <Story {...context} />
        </div>
      )
    }

    if (context.globals.theme === 'dark') {
      return (
        <div data-color-mode="dark" data-dark-theme="dark" className="story-wrap" id="story">
          <Story {...context} />
        </div>
      )
    }

    if (context.globals.theme === 'dark_dimmed') {
      return (
        <div data-color-mode="dark" data-dark-theme="dark_dimmed" className="story-wrap" id="story">
          <Story {...context} />
        </div>
      )
    }

    if (context.globals.theme === 'dark_high_contrast') {
      return (
        <div data-color-mode="dark" data-dark-theme="dark_high_contrast" className="story-wrap" id="story">
          <Story {...context} />
        </div>
      )
    }

    if (context.globals.theme === 'dark_protanopia') {
      return (
        <div data-color-mode="dark" data-dark-theme="dark_protanopia" className="story-wrap" id="story">
          <Story {...context} />
        </div>
      )
    }

    return (
      <div className="story-wrap" id="story">
        <Story {...context} />
      </div>
    )
  }
]

// var iframe = document.getElementById('iframeId')
// var innerDoc = iframe.contentDocument || iframe.contentWindow.document

// var x = document.getElementsByTagName("iframe")[0].contentWindow;
//x = window.frames[0];

// x.document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
// this would turn the 1st iframe in document blue.

// function getWidth() {
//   let iframe = document.getElementsByTagName('iframe')[0].contentWindow
//   let elem = iframe.document.getElementsByClassName('ActionList-item-visual')
//   let rect = elem.getBoundingClientRect()
//   console.log(rect)
// }

// document.addEventListener('DOMContentLoaded', getWidth)
