<template>
  <section class="mt-md-5 pt-5">
    <div class="slider">
      <div class="slider-item">
        <div class="container">
          <div
            class="row d-md-flex no-gutters slider-text align-items-center justify-content-center"
          >
            <div class="d-flex align-items-center">
              <div class="text text-center">
                <h1 class="mb-4 mt-3">I'm <span>Solomon Eseme</span></h1>
                <h4 class="mb-1">
                  A <span>Software Developer</span> who is geared towards
                  building high performing and innovative products following
                  best practices and industry standards. He also loves writing
                  about it.
                </h4>
                <p class="mt-3">
                  Join over <span>20,000</span> developers around the globe to
                  recieve insightful articles, tips and tricks from my journey
                  and tools in software development.
                </p>
                <form method="post" action="#" class="pt-3">
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email here"
                    class="p-1"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  //   name: "Home"
};
</script>

<style >
.slider {
  position: relative;
  z-index: 0;
  font-size: 20px;
  margin: 0px auto;
  color: #ffbd39;
}

.slider .slider-item .slider-text .subheading {
  color: #000000;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ffbd39;
}

.slider p span {
  color: #ffbd39;
}

.slider .slider-item .slider-text h1 {
  font-size: 60px;
  color: #fff;
  line-height: 1.2;
  font-weight: 800;
}

.slider .slider-item .slider-text h1 span {
  font-weight: 800;
  color: #ffbd39;
}

.slider .slider-item .slider-text h4 span {
  color: #ffbd39;
}

.slider .slider-item .slider-text .btn-custom {
  border: 1px solid #ffbd39;
  padding: 5px 20px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 3px;
}

.slider-item {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  position: relative;
  z-index: 0;
}
</style>