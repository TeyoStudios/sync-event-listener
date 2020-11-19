const SyncEventListener = () =>  {
  let synchronized = []; 
  let config = [];
  
  /**
   * Add a new dynamyc listener
   * @param {*} type 
   * @param {*} query 
   * @param {*} callback 
   */
  const addDynamycEvent = (type, query, callback) => {
      // Check if this setting has already been added
      let exist = config.find(conf => conf.type == type && conf.query == query && conf.callback == callback);
      
      // If it does not exist, it is added
      if(exist) {
          // console.error("You are adding the same configuration twice");
          console.error("Estas añadiendo dos veces la misma configuración.");
          return;
      }
      
      _syncEventListener(type, query, callback);

      config.push({type, query, callback});
  };

  /**
   * Use it after an ajax request, to synchronize the configured events.
   */
  const sync = () => {
      config.forEach(c => {
          _syncEventListener(c.type, c.query, c.callback);
      });
  }

  const _syncEventListener = (type, query, callback) => {
      let newElements = document.querySelectorAll(query);

      newElements.forEach(el => {
          let find = synchronized.find(syncConf => syncConf.el == el && syncConf.type == type && syncConf.callback == callback);
      
          // If it is not synced already, it is added
          if (find == undefined) {
              // The listener is added
              el.addEventListener(type, callback);
      
              // The event is synced
              synchronized.push({el, type, callback});
          }
      });

  }

  return {
      addDynamycEvent, 
      sync
  }
}

export default new SyncEventListener();
