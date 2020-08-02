let ccr = require('clash-config-regenerator')
module.exports = {
  type: 'list',
  async fetch({ args, page }) {
    return [
      {
        style: 'simple',
        title: 'Start Server',
        onClick: item => {
          $ui.toast(`Clicked ${item.title}`)
		  ccr.startServ()
        }
      },
	  {
        style: 'simple',
        title: 'Stop Server',
        onClick: item => {
          $ui.toast(`Clicked ${item.title}`)
		  ccr.stopServ()
        }
      }
    ]
  }
}
