//get the pathname from the current url
const path = window.location.pathname

const header= `
    <header class="menu">
        <div class="menu-wrap">
            <div class="logo">
                <a href="index.html#top" style="text-decoration: none"> <h3>Amy Parness</h3></a>
            </div>
            <!-- This is a tricky way of doing the mobile menu in only CSS but it really only works for the type of full screen menus that you must either close by clicking or by navigating to another page. -->
            <input type="checkbox" id="checkbox">
            <nav>
                <ul>
                    <li><a href="index.html">home</a></li>
                    <li><a href="writing.html">writing</a></li>
                    <li><a href="cv.html">CV</a></li>
                    <li><a href="mailto:&#097;&#109;&#121;&#064;&#115;&#112;&#097;&#114;&#107;&#108;&#101;&#108;&#097;&#098;&#115;&#046;&#099;&#111;&#109;">&#097;&#109;&#121;&#064;&#115;&#112;&#097;&#114;&#107;&#108;&#101;&#108;&#097;&#098;&#115;&#046;&#099;&#111;&#109;</a></li>
                    <li><a href="https://www.linkedin.com/in/amy-parness-71a313/" target="_blank">linkedin</a></li>
                </ul>
            </nav>
            <label for="checkbox">
                <!-- <i class="fa fa-bars menu-icon"></i> -->
                <i class="fas fa-caret-down menu-icon"></i>
            </label>
        </div>
    </header>`

document.querySelector("body").insertAdjacentHTML("afterbegin", header);

//add the active class to the anchor tag with the href === path
//document.querySelector(`[href='${path}']`).classList.add('active')

//this code from here: https://stackoverflow.com/questions/70993254/how-do-i-create-a-js-file-that-creates-a-navigation-bar-in-html
