import { useState } from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
      <>
          <div className="container">
              <div className="mb-3">
                  <label className="form-label">Tytuł filmu</label>
                  <input type="text" className="form-control"/>
              </div>
              <div className="mb-3">
                  <label className="form-label">
                      Gatunek filmu:
                  </label>
                  <select className="form-select">
                      <option id={"1"}>Komedia</option>
                      <option id={"2"}>Obyczajowy</option>
                      <option id={"3"}>Sensacyjny</option>
                      <option id={"4"}>Horror</option>
                  </select>
              </div>
              <div className="mb-3">
                  <button type="button" className="btn btn-primary">Dodaj</button>
              </div>
          </div>
      </>
  )
}

export default App
