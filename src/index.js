import Vue from 'vue';

const backgroundConfig = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  isShow: false
};

let list = [];

let background = undefined;
(function () {
  if (background) return;
  background = document.createElement('div');
  setBackground(background, backgroundConfig.backgroundColor);
})();

function setBackground (div, color) {
  div.style.position = 'fixed';
  div.style.top = '0px';
  div.style.left = '0px';
  div.style.right = '0px';
  div.style.bottom = '0px';
  div.style.width = '100%';
  div.style.height = '100%';
  div.style.display = 'flex';
  div.style.justifyContent = 'center';
  div.style.alignItems = 'center';
  div.style.zIndex = '1000000';
  div.style.backgroundColor = color;
}

function showBackground () {
  if (list.length < 1) return; // 열려있는 dialog 없으면 return
  document.body.appendChild(background);
  document.body.style['overflow'] = 'hidden'; // prevent scroll
}

function dismissBackground () {
  if (list.length > 0) return; // 열려있는 dialog 있으면 return
  document.body.removeChild(background);
  document.body.style['overflow'] = 'auto'; // scrolling available
}

const manager = {
  create (view, options = {}) {
    let instance = '';
    let promise = new Promise((resolve) => {
      /** backgorund 생성 */
      let dialogContainer = document.createElement('div');
      setBackground(dialogContainer, '');

      /** dialog instance 생성 */
      const Constructor = Vue.extend(view);

      instance = new Constructor({
        el: document.createElement('div'),
        propsData: options.props,
        store: options.store,
        methods: {
          dismiss (data) {
            this.$destroy();
            resolve(data);
          },
          show () {
            dialogContainer.appendChild(instance.$el);
            background.appendChild(dialogContainer);
            showBackground();
            return promise;
          }
        },
        beforeDestroy () {
          let idx = list.indexOf(instance);
          list.splice(idx, 1);
          background.removeChild(dialogContainer);
          dismissBackground()
        }
      });
    });

    list.push(instance);
    return instance;
  },
  removeAllDialog () {
    for (let i of list) i.dismiss();
    list = [];
  }
};


export default manager;
