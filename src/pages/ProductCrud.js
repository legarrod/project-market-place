import { useState } from "react";
import "./productcrud.css";
function ProductCrud() {
  const [showFormCreate, setshowFormCreate] = useState(false);
  const listProduts = [
    {
      id: 1,
      name: "Aceite de Oliva",
      imgUrl:
        "https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750103912729L.jpg",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
      price: 23000,
    },
    {
      id: 2,
      name: "Aceite de Oliva",
      imgUrl:
        "https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750103912729L.jpg",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
      price: 23000,
    },
    {
      id: 3,
      name: "Aceite de Oliva",
      imgUrl:
        "https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750103912729L.jpg",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
      price: 23000,
    },
    {
      id: 4,
      name: "Aceite de Oliva",
      imgUrl:
        "https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750103912729L.jpg",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
      price: 23000,
    },
    {
      id: 5,
      name: "Aceite de Oliva",
      imgUrl:
        "https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750103912729L.jpg",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
      price: 23000,
    },
  ];
  return (
    <div className="w-full px-3 sm:p-0">
      <div className="header-crud">
        <h2 className="font-semibold text-3xl">CREAR PRODUCTO</h2>
        <button
          className="bg-secondary hover:bg-green text-white p-3 rounded-md tex"
          onClick={() => setshowFormCreate(true)}
        >
          GUARDAR PRODUCTO
        </button>
      </div>
      {!showFormCreate ? (
        <section className="flex px-3 py-3 w-full ml-auto mr-auto flex-col justify-center sm:justify-around form-create-product sm:p-14">
          {listProduts.map((item) => (
            <div className="w-full flex flex-row justify-between" key={item.id}>
              <div className="flex flex-row items-center">
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="img-products-list"
                />
                <p className="font-medium text-lg">{item.name}</p>
              </div>

              <div className="flex flex-row items-center">
                <p className="font-medium text-lg mr-10">{item.price}</p>
                <button className="w-12 h-12">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/87fc/6827/dc08fcc38fc5dcd88b69b2d804a859ad?Expires=1682294400&Signature=Vw-1ABJZpmUejxiylpKeCLqMqi8w8qSH5RQ0MeYhlwKalnpGuEYm4EcUhGFmvNl~IxoGP1VznpiOlQGad0NBlITV5iPkGIErm-GQm-atS0dLS~odoe2az76Uv2JtH3aa4KChAnkV33tGNrFo0j0KwQel76AW~0nC11te1xug94xffKu~7pCpOUQC47xPBptTm~G6E8RIqJrqxDT09rL3KHovzEdKc0HkwmGHYnbdh2ISwlm7hHgv9gZxjxAzdgqpJHMNU06JkZLBcEEb1vHyVXJpzl-44fot-pH9SGZpuq9TFddrPv9-zEwNE2wPExfz1WD8Eiur8LfpsJIPARsaXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="Eliminar"
                  />
                </button>
                <button className="w-12 h-12">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/f6a0/b569/93d31c2189cba7e9965735d4405ebadb?Expires=1682294400&Signature=HPLQZ8SN1JaslCjf6eKc6MQlYDXmsgo8mE~njPyjypqWCOFhXP1Cfr3vbfv-UvD6D9-0awdffr65LmfR5WXA2EBRQ2ZaPPsvQVCyC9~R7Vc-BWyi7MLaU0221t1bpRUpL4XUjYEQ0jEijoIU3DeZHyCfUrxVx~7zAuPENZbASJ3Mp87KbAIAAUQ2fyVnqKE~Pi-Mpf7uyka4aTE6Ee5NODHVyHIPb7UPi5V7tNtG24ne8YZPGdJ7oQqa-VJzfWEMv251F1scTsECaCfmCRYlfYtYA2m1p9SMFykIQG4NIwUalZSt7zpfDghLhuuUt9trPVxMxGO0ZUhSEgRPe0NypQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="Editar"
                  />
                </button>
              </div>
            </div>
          ))}
        </section>
      ) : null}
      {showFormCreate ? (
        <section className="flex px-3 w-full ml-auto mr-auto flex-col justify-center sm:flex-row sm:justify-around form-create-product sm:p-14">
          <div className="flex flex-col justify-start items-center">
            <div className="flex flex-col w-full my-10">
              <label className="text-lg">Nombre:</label>
              <input
                className="inputs-form border-zinc-400"
                placeholder="Nombre del producto"
              />
            </div>
            <div className="flex flex-col w-full my-10">
              <label className="text-lg">Precio:</label>
              <input
                className="inputs-form border-zinc-400"
                placeholder="Precio del producto"
              />
            </div>
            <div className="flex flex-col w-full sm:flex-row justify-center items-center">
              <button className="bg-terciary mx-3 my-3 text-white p-3 button-save-img">
                SUBIR IMAGEN
              </button>
              <button
                className="bg-orange mx-3 my-3 text-white p-3 button-save-img-exte"
                onClick={() => setshowFormCreate(false)}
              >
                CANCELAR
              </button>
              <button className="bg-primary mx-3 my-3 text-white p-3 button-save-img-exte">
                GUARDAR
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center mt-4 sm:mt-0">
            <img
              alt="img"
              className="w-60 h-auto img-miniature"
              src="https://www.vinoselkiosco.com/wp-content/uploads/2020/10/El_Enemigo_Malbec.png"
            />
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default ProductCrud;
