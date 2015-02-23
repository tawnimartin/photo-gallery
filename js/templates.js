this["JST"] = this["JST"] || {};
this["JST"]["album_collection"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"albums_collection\">\n  <h1>Photo Gallery</h1>\n  <ul class=\"photos\">\n  </ul>\n</div>";
  },"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["album_thumbnail"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li class=\"photo\" data-group-name=\""
    + escapeExpression(((helper = (helper = helpers.album_name || (depth0 != null ? depth0.album_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album_name","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"sample-photo\">\n    <img src=\""
    + escapeExpression(((helper = (helper = helpers.photo_url || (depth0 != null ? depth0.photo_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_url","hash":{},"data":data}) : helper)))
    + "\">\n  </div>\n  <div class=\"album-name inner\">"
    + escapeExpression(((helper = (helper = helpers.album_name || (depth0 != null ? depth0.album_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album_name","hash":{},"data":data}) : helper)))
    + "</div>\n</li>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["big_photo"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<h1 class=\"detail\">"
    + escapeExpression(((helper = (helper = helpers.photo_name || (depth0 != null ? depth0.photo_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_name","hash":{},"data":data}) : helper)))
    + "</h1>\n<div class=\"img-detail\">\n<img src=\""
    + escapeExpression(((helper = (helper = helpers.photo_url || (depth0 != null ? depth0.photo_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_url","hash":{},"data":data}) : helper)))
    + "\">\n</div>\n<div class=\"back-btn\">Back to Album</div>\n  ";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["group_album_page"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"sidebar\"></div>\n<div class=\"main\">\n  <h1 class=\"test\"></h1>\n  <ul class=\"group_photos\">\n  ";
  },"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["group_album_thumbnail"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li class=\"photo\" data-photo-id="
    + escapeExpression(((helper = (helper = helpers.photo_id || (depth0 != null ? depth0.photo_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_id","hash":{},"data":data}) : helper)))
    + ">\n  <div class=\"little-photo\">\n    <img src=\""
    + escapeExpression(((helper = (helper = helpers.photo_url || (depth0 != null ? depth0.photo_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_url","hash":{},"data":data}) : helper)))
    + "\">\n  </div>\n  <div class=\"album-name inner\">"
    + escapeExpression(((helper = (helper = helpers.photo_name || (depth0 != null ? depth0.photo_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_name","hash":{},"data":data}) : helper)))
    + "</div>\n</li>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["nav_inner"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <li class=\"inner-album-name active\" data-group-name=\""
    + escapeExpression(((helper = (helper = helpers.album_name || (depth0 != null ? depth0.album_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album_name","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.album_name || (depth0 != null ? depth0.album_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album_name","hash":{},"data":data}) : helper)))
    + "</li>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["nav_outer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<ul class=\"nav-list\"></ul>";
  },"useData":true});