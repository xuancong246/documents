function StringUtils() {}

StringUtils.prototype.concat = function(head, tail, connector) {
  return head + connector + tail;
}

StringUtils.prototype.isExist = function(parent, sub) {
	if (parent.indexOf(sub) >= 0) return true;
	return false;
}