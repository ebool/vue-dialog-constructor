import Vue from 'vue';

export default {
  create (view, options = {}) {
    let instance = '';
    let promise = new Promise((resolve) => {

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
            window.document.body.appendChild(instance.$el);
            return promise;
          }
        },
        beforeDestroy () {
          window.document.body.removeChild(instance.$el);
        }
      });
    });
    return instance;
  },
};
