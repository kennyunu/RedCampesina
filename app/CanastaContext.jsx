import { createContext, useContext, useState } from "react";

const CanastaContext = createContext();

export function CanastaProvider({ children }) {
  const [items, setItems] = useState([]);

  function agregarItem(producto, campesino) {
    setItems((prev) => {
      const existe = prev.find((i) => i.id === producto.id);
      if (existe) {
        return prev.map((i) =>
          i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio_por_unidad,
          unidad: producto.unidad_medida,
          imagen: producto.imagenes?.[0] || null,
          etiquetas: producto.etiquetas || [],
          campesinoNombre: campesino?.nombre || "",
          campesinoGranja: campesino?.granja || "",
          campesinoId: campesino?.id || "",
          cantidad: 1,
        },
      ];
    });
  }

  function aumentar(id) {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, cantidad: i.cantidad + 1 } : i))
    );
  }

  function disminuir(id) {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id && i.cantidad > 1 ? { ...i, cantidad: i.cantidad - 1 } : i
      )
    );
  }

  function eliminar(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function vaciarCanasta() {
    setItems([]);
  }

  const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0);

  return (
    <CanastaContext.Provider
      value={{ items, agregarItem, aumentar, disminuir, eliminar, vaciarCanasta, total }}
    >
      {children}
    </CanastaContext.Provider>
  );
}

export function useCanasta() {
  return useContext(CanastaContext);
}
