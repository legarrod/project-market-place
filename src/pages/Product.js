
function Product() {
    return (
      <div>
       <div className="flex flex-col sm:flex-row mt-10 px-5">
        <div className="w-full sm:w-1/2 flex justify-center parent">
        <div className="child image-pdp-wrapper image-pdp">
          
        </div>
        </div>
        
       
        <div className="flex flex-col w-full sm:w-1/2">
          <h2 className="font-semibold text-5xl my-5">Manzana</h2>
          <p className="text-lg my-1">12.000/libra</p>
          <p className="text-lg my-5">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal </p>
          <button className="text-3xl font-medium bg-secondary my-5 text-white rounded-xl py-4">
            COMPRAR
          </button>
        </div>
       </div>
      </div>
      
    );
  }
  
  export default Product;
  