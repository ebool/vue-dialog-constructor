# vue-dialog-manager


# installing

Using npm:

~~~
npm install vue-dialog-manager
~~~

# Example

### 1. import
~~~
import DialogManager from 'vue-dailog-manager';
~~~

or

~~~
const DialogManager from 'vue-dialog-manager';
~~~

### 2. showing

You can display dialog as follow:
~~~
DialogManager.show({
    view: { template: '<h1 style="background-color='white'">Hello vue-dialog-manager</h1>'}
})
~~~

If you hope to insert data, you can do right this:

~~~
DialogManager.show({
    view: { 
        template: `<h1 style="background-color='white'">Hello {{title}}</h1>`,
        props: { title: 'hello'}    
    }
})
~~~

You can also use 'vuex' as follow:

~~~
DialogManager.show({
    view: { 
        template: `<h1 style="background-color='white'">Hello {{title}}</h1>`
    },
    props: { title: 'hello'},
    store: //input your vuex store    
})
~~~

### 3. dismiss

If you close dialog, All you have to do is call dismiss().

~~~
DialogManager.show({
    view: {
        template: `
          <div  style="background-color: white; padding: 20px;">
            <h1>Hello! vue dialog manager</h1>
            <hr>
            <h3>write dialog content</h3>
            <hr>
            <button @click="dismiss">close</button>
          </div>
          `
    }})
~~~

### 3. callback


