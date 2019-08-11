new Vue({
  el: '#exercise',
  data: {
    activeEffect:''
  },
  methods: {
    startEffect: function() {
      var vm = this;
    setInterval(() => {
      if(vm.activeEffect == '')
        vm.activeEffect = 'shrink';
      else if(vm.activeEffect == 'shrink')
        vm.activeEffect = 'highlight';
      else
        vm.activeEffect = 'shrink';        
    }, 1000);
    }
  }
});
