<template>
  <footer style="background-color: rgb(232, 232, 232)" class="footer footer-dark  footer-white ">
    <div class="container">
      <div class="row">
        <nav class="footer-nav">
          <ul>
            <li>
              <a href="#products" style="color: black">Products</a>
            </li>
            <li>
              <a href="http://mltool.in/" target="_blank">MLTool</a>
            </li>
          </ul>
        </nav>
        <div class="credits ml-auto"  >
          <span class="copyright" style="color: black">
            &copy; 
            PSwave Private Limited 
            {{year}}
            | A RoboMx&reg; venture
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  created: function() {
    this.year = new Date().getFullYear()
  }
}
</script>