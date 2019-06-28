# vue-dialog-manager


# installing

Using npm:

~~~
npm install vue-dialog-manager
~~~

# Example

### 1. Import
~~~vue
import DialogManager from 'vue-dailog-manager';
~~~

or

~~~vue
let DialogManager = require('vue-dialog-manager');
~~~

### 2. Showing

First you make your dialog.vue:

dialog.vue
~~~vue
<template>
  <h1>Insert Title</h1>
  <div>this is dialog</div>
</template>
<script>
export default {
}
</script>
~~~

You can display dialog as follow:
~~~vue
<script>
import Dialog from 'dialog.vue';
import DialogManager from 'vue-dialog-manager';
export default {
  methods: {
   show() {
    let instance = DialogManager.create(Dialog);
    instance.show();
   }
  },
}
</script>

~~~

### 3. Props data

If you hope to insert data, you can do right this:

dialog.vue
~~~vue
<template>
  <h1>{{title}}</h1>
  <div>this is dialog</div>
</template>
<script>
export default {
  props: ['title']
}
</script>
~~~

index.vue
~~~vue
<script>
import DialogManager from 'vue-dialog-manager';
import Dialog from 'dialog.vue';

export default {
  methods: {
   show () {
    DialogManager.create(Dialog, {
      props: {
        title: 'Dialog title'
      }
    })
   }
  }
}
</script>
~~~

### 4. Using vuex

You can also use 'vuex' as follow:

~~~vue
<script>
import DialogManager from 'vue-dialog-manager';
import Dialog from 'dialog.vue';

export default {
  methods: {
   show() {
      DialogManager.create(Dialog, {store: this.$store}).show()    
   }
  },
}
</script>
~~~

### 5. Dismiss

If you close dialog, All you have to do is call dismiss().

First, instance.dismiss();

Second, call dismiss() inside dialog.vue

dialog.vue
~~~vue
<template>
  <h1>Insert Dialog title</h1>
  <div>this is dialog</div>
  <button @click="close">close</button>
</template>
<script>
export default {
  methods: {
   close () {
    this.dismiss();
   }
  },
}
</script>
~~~

instance equals this of dialog.vue

### 6. callback

You can return data when you close dialog

dialog.vue
~~~vue
<template>
  <h1>Insert Dialog title</h1>
  <div>this is dialog</div>
  <button @click="close">close</button>
</template>
<script>
export default {
  methods: {
   close () {
    this.dismiss('Insert your data');
   }
  },
}
</script>
~~~

index.vue

~~~vue
<script>
import DialogManager from 'vue-dialog-manager';
import Dialog from 'dialog.vue';

export default {
  methods: {
   show() {
      let instance = DialogManager.create(Dialog, {store: this.$store});
      instance.show().then((data) => {
        console.log('data from dialog.vue : ', data);
    })
   }
  }
}
</script>
~~~

If you use ECMAScript 2017:

index.vue

~~~vue
<script>
import DialogManager from 'vue-dialog-manager';
import Dialog from 'dialog.vue';

export default {
  methods: {
   async show() {
      let instance = DialogManager.create(Dialog, {store: this.$store});
      let data = await instance.show();
      console.log('data from dialog.vue : ', data);
   }
  }
}
</script>
~~~

# License

MIT

