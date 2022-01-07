import React from 'react'
import Layout from '../components/layout/Layout'

const CrearCuenta = () => {
  return (
    <Layout>

      <div className='caja0'>

        <div className='cajaPrincipal'>

          <div className='cajaLogin'>
            <div className='cajaTitulo'>CREAR CUENTA</div>

            <form>

              <div className='LabelInput'>

                <label htmlFor="nombre">Nombre</label>
                <input
                  className=''
                  type="text"
                  id="nombre"
                  placeholder="Tu nombre"
                  name="nombre"

                // value={nombre}
                // onChange={handleChange}
                // onBlur={handleBlur}
                />
              </div>

              <div className='LabelInput'>

                <label htmlFor="email">Email</label>
                <input
                  className=''
                  type="email"
                  id="email"
                  placeholder="Tu Email"
                  name="email"

                // value={email}
                // onChange={handleChange}
                // onBlur={handleBlur}
                />
              </div>


              <div className='LabelInput'>

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Tu Password"
                  name="password"
                />

              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`

.cajaTitulo{
  text-align: center;

  margin: 1rem;
  font-size:1.8rem;
  font-weight:600;
}

    label {
        flex: 0 0 120px;
        font-size: 1.5rem;
    }
    input{
        flex: 1;
        padding: 0.5rem;
        border: solid 0.5px black;
        border-radius:5px;
    }

.caja0{
    background-color: rgb(139, 139, 139);
    padding: 5px;
    max-width: 1500px;
    margin: 0 auto;
    
}

.cajaPrincipal{
   background-color: rgb(61, 61, 61);
   max-width: 1200px;
   margin: 0 auto;
   padding-top:5rem;
   height: 100vh;
   border-radius:5px ;
      

}

.cajaLogin{
  background-color: rgb(143, 143, 143);
    margin: 0 auto;
    padding:1rem;
   max-width: 400px;
   border-radius:5px ;
   box-shadow: 0px 6px 21px 0px rgba(0, 0, 0, 0.7);

}
.LabelInput{
  background-color: rgb(94, 94, 94);
    margin-bottom: 2rem;
    padding-left:0.5rem;
    border-radius:5px;
    display: flex;
    align-items: center;
    box-shadow: 0px 6px 21px 0px rgba(0, 0, 0, 0.7);
}

@media (max-width: 600px) {

  .cajaTitulo{

  text-align: center;

  margin: 1rem;
  font-size:1.2rem;
  font-weight:600;
}

    label {
        flex: 0 0 75px;
        font-size: 1.1rem;
    }
    input{
     
        padding: 0.4rem;
        border: solid 0.5px black;
        border-radius:3px;
    }

.caja0{

    padding: 3px;
    
}

.cajaPrincipal{
   padding-top:8rem;
   border-radius:3px ;
       padding-left:0.1rem;
        padding-right:0.1rem;

}

.cajaLogin{
  
 margin: 0 auto;
    padding:0.1rem;
   border-radius:5px ;

}
.LabelInput{

    margin-bottom: 2rem;
    padding-left:0.5rem;
    border-radius:3px;

}


}




`}</style>
    </Layout>

  )
}

export default CrearCuenta
