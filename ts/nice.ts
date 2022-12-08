const nice = (options: JSON) => {
  let carousel: HTMLElement;
  let carouselOptions: JSON;

  function init(this: any, carouselOptions: JSON) {
    this.carouselOptions = carouselOptions;
  }

  init(options);
};

export default nice;
