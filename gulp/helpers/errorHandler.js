function errorHandler(e) {
    console.error(e);
    this.emit('end');
}

module.exports = errorHandler;
