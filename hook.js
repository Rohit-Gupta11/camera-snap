const ioHook = require('iohook');

ioHook.on('mousemove', (event) => {
  console.log(event); // { type: 'mousemove', x: 700, y: 400 }
});

ioHook.on('keydown', (event) => {
  console.log('pressed')
})

// Register and start hook
ioHook.start();

// Alternatively, pass true to start in DEBUG mode.
ioHook.start(true);

// False to disable DEBUG. Cleaner terminal output.
ioHook.start(false);