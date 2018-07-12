import { httpServer } from '../utils/http.js'
import Interface from '../config/interface.js';

function getList () {
  return httpServer({
    url: Interface.get_list
  })
}

export {
  getList
}

