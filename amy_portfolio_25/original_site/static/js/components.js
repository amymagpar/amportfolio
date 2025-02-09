// Head component
function insertHead() {
    const nav = `<script>console.log("head");</script>`;

    // Insert the navigation at the start of the body
    document.body.insertAdjacentHTML('afterbegin', head);
}
// Navigation component
function insertNavigation() {
    const nav = `<header id="navbar" class=" w-full fixed top-0 z-50 bg-white border-0 border-b border-accent shadow-md text-sm lg:text-base 2xl:text-lg tracking-wide">
    <div class="container px-4 mx-auto navbar p-0 h-10 sm:h-12">
      <div class="navbar-start uppercase left-0">
        <ul class="list-none">
        <li>
        <a class="font-light" href="/">Amy Parness</a>
        </li>
        </ul>
      </div>
      <div class="navbar-center flex-grow">
      </div>
      <div class="navbar-end">
      <ul id="myTopnav" class="
        topnav
        transition-all
        ease-in-out
        overflow-hidden
        max-h-0
        sm:max-h-full
        sm:flex
        shadow-md
        sm:shadow-none
        text-sm
        pb-0
        sm:text-base
        border-t-0
        border-l-0
        border-r-0
        font-light
        list-none
        flex-col
        sm:flex-row
        absolute
        sm:relative
        top-[64px]
        sm:top-0
        right-0
        sm:p-0
        sm:border-0
        border-accent
        w-full
        sm:w-auto
        bg-white
        ease-in-out
        ">
            <li id=""  class="py-3 px-4" ><a href="/projects/">Projects</a></li>
            <li id=""  class="py-3 px-4" ><a href="/cv/">CV</a></li>
            <li id=""  class="py-3 px-4 sm:pl-4" ><a href="/writing/">Writing</a></li>
         </ul>
            <div class="block sm:hidden">
              <a href="javascript:void(0);" class="icon" onclick="responsiveNav()">
                <i class="fa fa-bars"></i>
              </a>
           </div>
      </div>
    </div>
  </header>`;

    // Insert the navigation at the start of the body
    document.body.insertAdjacentHTML('afterbegin', nav);
}

// Footer component
function insertFooter() {
    const footer = `
    <footer class="text-base-300 text-xs">
        <div class="container mx-auto p-5">
            &copy; 2025 Amy Parness 
        </div>
    </footer>`;

    // Find the last child of the body to insert the footer before
    const lastBodyChild = document.body.lastElementChild;
    document.body.insertBefore(
        new DOMParser().parseFromString(footer, 'text/html').body.firstChild, 
        lastBodyChild.nextSibling
    );
}


// Execute when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', insertNavigation);
document.addEventListener('DOMContentLoaded', insertFooter);
