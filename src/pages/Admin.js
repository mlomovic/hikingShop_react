import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../contexts/ProductsContext';
import { useNavigate } from 'react-router-dom';

import deletProduct from '../util/deletProduct';


const Admin = () => {

  const navigate = useNavigate();

  const { products, setProducts } = useContext(ProductContext);

  const [editMode, setEditMode] = useState({ mode: false, id: null })

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [img, setImg] = useState('');
  const [qty, setQty] = useState('');


  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(res => res.json())
      .then(prodRes => setProducts(prodRes))
      .catch(err => console.log(err));
  }, [products])



  const addProduct = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);


    formData.append('name', name);
    formData.append('price', price);
    formData.append('desc', desc);
    formData.append('category', category);
    formData.append('qty', qty);


    fetch('http://localhost:3000/add', {
      method: 'POST',
      body: formData
    })
      .then(_ => {
        setName('');
        setPrice(0);
        setDesc('');
        setCategory('');
        setImg('');
        setQty(0);
      })
      .catch(err => console.log(err));

  }




  const viewProduct = (id) => {
    navigate(`/single/${id}`);
  }

  const setEditProduct = (id) => {
    setEditMode({ mode: true, id: id });

    let product = products.filter(prod => {
      if (prod.id == id) {
        return prod;
      }
    });

    setName(product[0].name);
    setPrice(product[0].price);
    setDesc(product[0].desc);
    setCategory(product[0].category);
    setQty(product[0].qty);

  }


  const cancelEditing = () => {
    setEditMode({ mode: false, id: null });

    setName('');
    setPrice(0);
    setDesc('');
    setCategory('');
    setQty(0);
  }


  const editProduct = (event) => {
    event.preventDefault();

    // PUT http://localhost:3000/edit/:id - izmena postojeceg proizvoda

    const data = {
      name: name,
      price: price,
      desc: desc,
      category: category,
      qty: qty 
    }

    fetch(`http://localhost:3000/edit/${editMode.id}`, {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(productRaw => productRaw.json())
    .then(productJson => {
      console.log(productJson);

      setEditMode({ mode: false, id: null });

      setName('');
      setPrice(0);
      setDesc('');
      setCategory('');
      setQty(0);

    })
    .catch(err => console.log(err));

  }


  const removeProduct = (id) => {
    deletProduct(id, setProducts);
  }

  return (

    <div className='container'>

      {
        editMode.mode ?
          <>
            <form onSubmit={editProduct}>
              <div className="mb-3">
                <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)} placeholder='Name' />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" value={price} onChange={(event) => setPrice(event.target.value)} placeholder='Price' />
              </div>
              <div className="mb-3">
                <textarea className="form-control" name="desc" rows="3" id="frmDescription" value={desc} onChange={(event) => setDesc(event.target.value)} placeholder='Dscription'></textarea>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" value={category} onChange={(event) => setCategory(event.target.value)} placeholder='Category' />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" value={qty} onChange={(event) => setQty(event.target.value)} placeholder='Qty' />
              </div>
              <input type="submit" value="Edit" className="btn btn-warning" id="addButton" />
            </form>
            <button className='btn btn-danger mt-3' onClick={() => cancelEditing()}>Cance</button>
          </>
          :
          <form onSubmit={addProduct}>
            <div className="mb-3">
              <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)} placeholder='Name' />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" value={price} onChange={(event) => setPrice(event.target.value)} placeholder='Price' />
            </div>
            <div className="mb-3">
              <textarea className="form-control" name="desc" rows="3" id="frmDescription" value={desc} onChange={(event) => setDesc(event.target.value)} placeholder='Dscription'></textarea>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" value={category} onChange={(event) => setCategory(event.target.value)} placeholder='Category' />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" value={qty} onChange={(event) => setQty(event.target.value)} placeholder='Qty' />
            </div>
            <div className="mb-3">
              <input type="file" className="form-control" name='img' id='img' value={img} onChange={(event) => setImg(event.target.value)} placeholder='Image' />
            </div>
            <input type="submit" value="Add" className="btn btn-primary" id="addButton" />
          </form>
      }

      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Qty.</th>
            <th scope="col">Price</th>
            <th scope="col">View</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody id="productTable">
          {
            products.map((product, idx) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td><img src={`http://localhost:3000/${product.img}`} height="30px" /></td>
                  <td>{product.name}</td>
                  <td>{product.qty}</td>
                  <td>${product.price}</td>
                  <td><button className="btn btn-info" onClick={() => viewProduct(product.id)}>View</button></td>
                  <td><button className="btn btn-warning" onClick={() => setEditProduct(product.id)}>Edit</button></td>
                  <td><button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Delete</button></td>
                </tr>
              )
            })
          }

        </tbody>
      </table>

    </div>

  )
}

export default Admin;