<div class="drawer drawer-end">
  <input id="drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <slot name="content">
      <!-- Page content here -->
      <label for="drawer" class="drawer-button btn btn-primary">Open drawer</label>
    </slot>
  </div> 
  <div class="drawer-side">
    <label for="drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-full DrawerBG text-base-content">
      <slot name="side">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </slot>       
    </ul>
  </div>
</div>