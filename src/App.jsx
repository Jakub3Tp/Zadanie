import './App.css'

function App() {
    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);

        // Pobierz tytuł filmu
        const title = formData.get("title");
        console.log(`Tytuł filmu: ${title}`);

        // Pobierz wybrany gatunek
        const genre = formData.get("movie");
        console.log(`Wybrany gatunek: ${genre}`);
    }

  return (
      <>
          <form onSubmit={handleSubmit} method='post'>
              <div className="container">
                  <div className="mb-3">
                      <label className="form-label">Tytuł filmu</label>
                      <input type="text" className="form-control" name="title"/>
                  </div>
                  <div className="mb-3">
                      <label className="form-label">
                          Gatunek filmu:
                      </label>
                      <select className="form-select" name='movie'>
                          <option id={"1"}>Komedia</option>
                          <option id={"2"}>Obyczajowy</option>
                          <option id={"3"}>Sensacyjny</option>
                          <option id={"4"}>Horror</option>
                      </select>
                  </div>
                  <div className="mb-3">
                      <button type="submit" className="btn btn-primary">Dodaj</button>
                  </div>
              </div>
              </form>
          </>
          )
          }

          export default App
