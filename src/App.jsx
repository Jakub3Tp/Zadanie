import './App.css'

function App() {
    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);

        const title = formData.get('title');
        const genre = formData.get("id");

        const movie = {
            Tytul: title,
            id: genre
        }

        console.log(movie);
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
                          Rodzaj:
                      </label>
                      <select className="form-select" name='id'>
                          <option value="1">Komedia</option>
                          <option value="2">Obyczajowy</option>
                          <option value="3">Sensacyjny</option>
                          <option value="4">Horror</option>
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
