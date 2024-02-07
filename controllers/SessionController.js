// metodos: index, show, update, store, destroy

class SessionController{
  store(req, res){
    return res.json({message: 'My api'})
  }
}

export default new SessionController();