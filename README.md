# SyncEventListener

_SyncEventListener, is a small tool, which helps to assign js events to DOM objects dynamically loaded with Ajax._
<!-- _Acá va un párrafo que describa lo que es el proyecto_ -->

When you create a new html object with js, it has no events.
For example, if you have a list, and this list has create, edit, delete buttons, and you create a new row with js, the buttons in this row will not have the events unless you add them by hand.

With Sync Event Listener these events that need to be added on new elements, are added to the elements with a new function (instead of with addEventListener), and these events are added dynamically, just by calling a function after creating the new ones. html elements.


## Starting 🚀

_To use it you only need to import the module where you need it, and assign the events with the module, instead of using addEventListener._

<!-- _Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._ -->

See **Deployment** to know how to deploy the project.


### Pre-requirements 📋

_There are not pre requirements_


### Installation 🔧

_Just install the last version_

```
npm install @teyostudios/sync-event-listener --save
```

## Deployment 📦

_Import in your js_
```
import SyncEventListener from @teyostudios/sync-event-listener;
```

If you prefer a shorter name
```
import SyncEventListener as customName from @teyostudios/sync-event-listener;
```

_There are just 2 functions:_
- sync : to add all events synced with addDynamicEvent()
- addDynamycEvent : to synchronize events to be added after sync()

### Add Events
addDynamycEvent (type, query, callback)

type String - Js type of event (click, input, focusin,...)
query String - DOM document.querySelector query. Ej: (".classname" , "#identifier",  ".classname .otherclassname")
callback function - The function that will be executed when the event is triggered

Ej:
```
SyncEventListener.addDynamycEvent("click", ".saveButton", sendData);
```

### sync
When with js create a new object, add the synchronized events with Sync()

```
SyncEventListener.sync();
```

## Build With 🛠️

_PureJs_

<!-- * [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS -->

<!-- ## Contributing 🖇️

Please read the [CONTRIBUTING.md](https://github.com/TeyoStudios/sync-event-listener/blob/master/CONTRIBUTING.md) for details of our code of conduct, and the process for sending us pull requests. -->


<!-- ## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki) -->

## Versioned 📌

We use [SemVer](http://semver.org/) for versioning. For all available versions, loot at the [tags in this repository](https://github.com/teyostudios/sync-event-listener/tags)

## authors ✒️

* **Diego Martín** - *Development* - [ElionTDA](https://github.com/ElionTDA)

<!-- También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto.  -->

## Licence 📄

This project is under the MIT licence - see the file [LICENSE.md](LICENSE.md) for more details. 

## If you liked it and it was useful 🎁

* Tell others about this project 📢
* Invite to a coffee ☕ or a beer 🍺. 
* Give thanks 🤓.

---
⌨️ con ❤️ por [TeyoStudios](https://github.com/TeyoStudios) 😊