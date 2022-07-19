<div class="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->


    <div class="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 undefined" style="background-size: 5px 5px">
      <div>
        <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div>
        <div class="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
      </div>
    </div>

    <div class="hero">
      <figure>
        <img src="https://unsplash.it/1600/900?image=830" alt="" />
        <figcaption>
          <h1>Angled Edge</h1>
          <p>Image with CSS clip-path</p>
        </figcaption>
      </figure>
    </div>
    
    <div class="promo">
      <h1>Angled Edge</h1>
      <p>CSS background with CSS clip-path</p>
    </div>
    <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-4" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>



  <style lang="scss">
    // slanted edge here
    .hero img {
      max-height: 200px;
      -webkit-clip-path: polygon(0 0, 100% 0, 90% 90%, 10% 100%);
      clip-path: polygon(0 0, 100% 0, 90% 90%, 10% 100%);
    }
    .promo {
      -webkit-clip-path: polygon(22% 14%, 80% 0%, 100% 100%, 0% 100%);
      clip-path: polygon(22% 14%, 80% 0%, 100% 100%, 0% 100%);
    }
  
    // demo code below
    .heroOFF {
      color: #fff;
      font-family: 'Fira Sans', sans-serif;
      position: relative;
      text-align: center;
      text-shadow: 0px 0px 1px rgba(0,0,0,0.5);
      
      img {
        width: 100%;
      }
      
      figcaption {
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
      }
      
      h1 {
        font-size: 32px;
      }
      
      p {
        font-size: 14px;
        font-weight: 300;
        margin-top: 0.5em;
      }
    }
  
    .promoOFF {
      background: red;
      background-size: cover;
      color: #fff;
      font-family: 'Fira Sans', sans-serif;
      margin: 50px 0;
      overflow: hidden;
      padding: 150px 20px;
      position: relative;
      text-align: center;
      text-shadow: 0px 0px 1px rgba(0,0,0,0.5);
      
      h1 {
        font-size: 32px;
      }
      
      p {
        font-size: 14px;
        font-weight: 300;
        margin-top: 0.5em;
      }
    }
  </style>