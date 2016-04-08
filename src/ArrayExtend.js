(function() {
	Array.prototype.has = function(need) {
		for(var i = 0; i < this.length; i++) {
			if(this[i] == need) return true;
		}
		return false;
	};

	Array.prototype.remove = function(need) {
		for(var i = 0; i < this.length; i++) {
			if(this[i] == need) this.splice(i, 1);
		}
		return this;
	};

	Array.prototype.min = function() {
		return Math.min.apply(null, this);
	};

	Array.prototype.max = function() {
		return Math.max.apply(null, this);
	};
})();