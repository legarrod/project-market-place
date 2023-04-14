
function ProductCrud() {
    return (
      <div>
          <div className="header-crud">
            <h2 className="font-semibold text-3xl">CREAR PRODUCTO</h2>
            <button className="bg-secondary hover:bg-green text-white p-3 rounded-md tex">GUARDAR PRODUCTO</button>
          </div>
          <section className="flex w-4/5 ml-auto mr-auto flex-col justify-center sm:flex-row sm:justify-around border-2 rounded-xl shadow-md p-14">
            <div className="flex flex-col justify-start items-center">
              <div className="flex flex-col my-10">
                <label className="font-medium text-lg">Nombre:</label>
                <input className="border-2 border-zinc-400" placeholder="Nombre del producto" />
              </div>
              <div className="flex flex-col my-10">
              <label className="font-medium text-lg">Precio:</label>
                <input className="border-2 border-zinc-400" placeholder="Precio del producto"/>
              </div>
              <div className="flex flex-col justify-center items-center">
                <button className="bg-terciary text-white p-3 rounded-md">
                  SUBIR IMAGEN
                </button>
              </div>
            </div>
            <div>
              <img alt="img" className="w-60 h-auto" src="https://www.vinoselkiosco.com/wp-content/uploads/2020/10/El_Enemigo_Malbec.png" />
            </div>
          </section>
      </div>
      
    );
  }
  
  export default ProductCrud;
  