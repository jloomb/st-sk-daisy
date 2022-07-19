<div class="drawer drawer-end">
  <input id="drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content mx-auto">
    <!-- Page content here -->


    <div class="flex flex-col w-11/12 mx-auto h-screen items-center overflow-x-hidden">

      <div class="tag-wrap w-1/2 h-1/4 -mb-9 pr-8">
        <div class="welcome-top h-full grid bg-accent content-end">
          <img class="mx-auto pb-6" src="/ST_logo.png" alt="souptrippers logo"/>
        </div> 
      </div>

      <div class="tag-wrap h-3/4 w-full pl-4">
        <div class="welcome-bottom h-full pt-10 mx-3 flex flex-col flex-1 justify-between bg-accent text-accent-content content-end">
          <div>
            <h1>COMING SOON</h1>
            <p></p>
          </div>
          <div>
            <span class="tag-wrap m-6">
              <label for="drawer" class="menu-button btn btn-secondary w-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </span>
          </div>

        </div>
      </div>
    </div>

  </div> 
  <div class="drawer-side">
    <label for="my-drawer-4" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-full bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <label for="drawer" class="drawer-button btn btn-secondary">Close drawer</label>
    </ul>
  </div>
</div>


<style lang="scss">
  // slanted edge here
  .welcome-top {
    -webkit-clip-path: polygon(0 0, 100% 0, 90% 90%, 10% 100%);
    clip-path: polygon(0 0, 100% 0, 90% 90%, 10% 100%);
    img {
      width: 60%;
    }
  }
  .welcome-bottom {
    -webkit-clip-path: polygon(22% 5%, 80% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(22% 5%, 80% 0%, 100% 100%, 0% 100%);
    overflow: hidden;
    text-align: center;
  }

.tag-wrap {
  filter: drop-shadow(0 0 10px rgba(50, 50, 0, 0.5));
} 

.menu-button {
  -webkit-clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 100%, 0 100%, 0% 20%);
  clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 100%, 0 100%, 0% 20%);
}

</style>