import Vue from 'vue';

export default {
  create: ({ view, store, props }) => {
    // view 가 vue component 인지 확인
    const Constructor = Vue.extend(view);
    let instance = new Constructor({
      el: document.createElement('div'),
      propsData: props,
      store,
      methods: {
        dismiss () { this.$destroy(); },
        show () {
          let cont = document.createElement('div');
          cont.style.position = 'fixed';
          cont.style.top = '0px';
          cont.style.left = '0px';
          cont.style.right = '0px';
          cont.style.bottom = '0px';
          cont.style.width = '100%';
          cont.style.height = '100%';
          cont.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
          cont.appendChild(this.$el);
          document.body.appendChild(cont);
          document.body.style['overflow'] = 'hidden'; // prevent scroll
        }
      },
      beforeDestroy () {
        instance.$el.parentNode.removeChild(this.$el);
        document.body.style['overflow'] = 'auto'; // scrolling available
      }
    });
    return instance;
  }
};
