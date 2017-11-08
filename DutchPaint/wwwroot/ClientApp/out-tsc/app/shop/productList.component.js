var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from '../shared/dataService';
var ProductListComponent = (function () {
    function ProductListComponent(data) {
        this.data = data;
        this.products = data.products;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadProducts()
            .subscribe(function () { return _this.products = _this.data.products; });
    };
    ProductListComponent.prototype.addProduct = function (product) {
        this.data.AddToOrder(product);
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    Component({
        selector: "product-list",
        templateUrl: "productList.component.html",
        styleUrls: ["productList.component.css"]
    }),
    __metadata("design:paramtypes", [DataService])
], ProductListComponent);
export { ProductListComponent };
//# sourceMappingURL=productList.component.js.map