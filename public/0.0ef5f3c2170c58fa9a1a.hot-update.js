webpackHotUpdate(0,{

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(55);\n\nvar _reduxForm = __webpack_require__(254);\n\nvar _reactBootstrap = __webpack_require__(53);\n\nvar _actions = __webpack_require__(129);\n\nvar _selectors = __webpack_require__(274);\n\nvar _FormInputField = __webpack_require__(276);\n\nvar _FormInputField2 = _interopRequireDefault(_FormInputField);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar validate = function validate(values) {\n\n  var errors = {};\n\n  if (!values.name) {\n    errors.name = 'Required';\n  }\n\n  if (!values.price) {\n    errors.price = 'Required';\n  } else if (isNaN(Number(values.price))) {\n    errors.price = 'Must be a number';\n  } else if (Number(values.price) < 0) {\n    errors.price = 'Price must be equal or greater than 0';\n  }\n\n  return errors;\n};\n\nvar toNumber = function toNumber(value) {\n  return Number(value);\n};\n\nvar FormProduct = function FormProduct(_ref) {\n  var selectedProduct = _ref.selectedProduct,\n      handleSubmit = _ref.handleSubmit,\n      addNewProduct = _ref.addNewProduct,\n      updateProduct = _ref.updateProduct,\n      load = _ref.load,\n      pristine = _ref.pristine,\n      reset = _ref.reset,\n      submitting = _ref.submitting;\n\n  var submitFn = selectedProduct ? updateProduct : addNewProduct;\n  return _react2.default.createElement(\n    'form',\n    { onSubmit: handleSubmit(submitFn) },\n    _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_reduxForm.Field, {\n          name: 'name',\n          type: 'text',\n          component: _FormInputField2.default,\n          label: 'Name'\n        })\n      )\n    ),\n    _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_reduxForm.Field, {\n          name: 'price',\n          type: 'number',\n          component: _FormInputField2.default,\n          label: 'Price',\n          parse: toNumber\n        })\n      )\n    ),\n    _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        _reactBootstrap.ButtonGroup,\n        null,\n        selectedProduct ? _react2.default.createElement(\n          _reactBootstrap.Button,\n          { bsStyle: 'info', type: 'submit', disabled: pristine || submitting },\n          'Submit Changes'\n        ) : _react2.default.createElement(\n          _reactBootstrap.Button,\n          { bsStyle: 'success', type: 'submit', disabled: pristine || submitting },\n          'Add New Product'\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.Button,\n          { type: 'button', disabled: pristine || submitting, onClick: reset },\n          'Undo Changes'\n        )\n      )\n    )\n  );\n};\n\nFormProduct = (0, _reduxForm.reduxForm)({\n  form: 'productFrom',\n  validate: validate\n})(FormProduct);\n\nfunction mapStateToProps(state) {\n  return {\n    selectedProduct: (0, _selectors.selectedProductSelector)(state),\n    initialValues: (0, _selectors.selectedProductSelector)(state) || { name: \"\", price: 0 }\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    addNewProduct: function addNewProduct(values) {\n      return dispatch((0, _actions.addNewProductRequest)(values));\n    },\n    updateProduct: function updateProduct(values) {\n      return dispatch((0, _actions.updateProductRequest)(values));\n    }\n  };\n}\n\nFormProduct = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FormProduct);\n\nexports.default = FormProduct;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHJvZHVjdHMvRm9ybVByb2R1Y3QuanM/NmQxOSJdLCJuYW1lcyI6WyJ2YWxpZGF0ZSIsImVycm9ycyIsInZhbHVlcyIsIm5hbWUiLCJwcmljZSIsImlzTmFOIiwiTnVtYmVyIiwidG9OdW1iZXIiLCJ2YWx1ZSIsIkZvcm1Qcm9kdWN0Iiwic2VsZWN0ZWRQcm9kdWN0IiwiaGFuZGxlU3VibWl0IiwiYWRkTmV3UHJvZHVjdCIsInVwZGF0ZVByb2R1Y3QiLCJsb2FkIiwicHJpc3RpbmUiLCJyZXNldCIsInN1Ym1pdHRpbmciLCJzdWJtaXRGbiIsImZvcm0iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImluaXRpYWxWYWx1ZXMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxTQUFYQSxRQUFXLFNBQVU7O0FBRXpCLE1BQU1DLFNBQVMsRUFBZjs7QUFFQSxNQUFJLENBQUNDLE9BQU9DLElBQVosRUFBa0I7QUFDaEJGLFdBQU9FLElBQVAsR0FBYyxVQUFkO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDRCxPQUFPRSxLQUFaLEVBQW1CO0FBQ2pCSCxXQUFPRyxLQUFQLEdBQWUsVUFBZjtBQUNELEdBRkQsTUFFTyxJQUFJQyxNQUFNQyxPQUFPSixPQUFPRSxLQUFkLENBQU4sQ0FBSixFQUFpQztBQUN0Q0gsV0FBT0csS0FBUCxHQUFlLGtCQUFmO0FBQ0QsR0FGTSxNQUVBLElBQUlFLE9BQU9KLE9BQU9FLEtBQWQsSUFBdUIsQ0FBM0IsRUFBOEI7QUFDbkNILFdBQU9HLEtBQVAsR0FBZSx1Q0FBZjtBQUNEOztBQUVELFNBQU9ILE1BQVA7QUFDRCxDQWpCRDs7QUFtQkEsSUFBTU0sV0FBVyxTQUFYQSxRQUFXO0FBQUEsU0FBU0QsT0FBT0UsS0FBUCxDQUFUO0FBQUEsQ0FBakI7O0FBRUEsSUFBSUMsY0FBYywyQkFBdUc7QUFBQSxNQUFyR0MsZUFBcUcsUUFBckdBLGVBQXFHO0FBQUEsTUFBcEZDLFlBQW9GLFFBQXBGQSxZQUFvRjtBQUFBLE1BQXRFQyxhQUFzRSxRQUF0RUEsYUFBc0U7QUFBQSxNQUF2REMsYUFBdUQsUUFBdkRBLGFBQXVEO0FBQUEsTUFBeENDLElBQXdDLFFBQXhDQSxJQUF3QztBQUFBLE1BQWxDQyxRQUFrQyxRQUFsQ0EsUUFBa0M7QUFBQSxNQUF4QkMsS0FBd0IsUUFBeEJBLEtBQXdCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFDdkgsTUFBTUMsV0FBV1Isa0JBQWtCRyxhQUFsQixHQUFrQ0QsYUFBbkQ7QUFDQSxTQUNFO0FBQUE7QUFBQSxNQUFNLFVBQVVELGFBQWFPLFFBQWIsQ0FBaEI7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUNFLGdCQUFLLE1BRFA7QUFFRSxnQkFBSyxNQUZQO0FBR0UsNkNBSEY7QUFJRSxpQkFBTTtBQUpSO0FBREY7QUFERixLQUZGO0FBWUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFDRSxnQkFBSyxPQURQO0FBRUUsZ0JBQUssUUFGUDtBQUdFLDZDQUhGO0FBSUUsaUJBQU0sT0FKUjtBQUtFLGlCQUFPWDtBQUxUO0FBREY7QUFERixLQVpGO0FBdUJFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNJRywwQkFBbUI7QUFBQTtBQUFBLFlBQVEsU0FBUSxNQUFoQixFQUF1QixNQUFLLFFBQTVCLEVBQXFDLFVBQVVLLFlBQVlFLFVBQTNEO0FBQUE7QUFBQSxTQUFuQixHQUNvQjtBQUFBO0FBQUEsWUFBUSxTQUFRLFNBQWhCLEVBQTBCLE1BQUssUUFBL0IsRUFBd0MsVUFBVUYsWUFBWUUsVUFBOUQ7QUFBQTtBQUFBLFNBRnhCO0FBR0U7QUFBQTtBQUFBLFlBQVEsTUFBSyxRQUFiLEVBQXNCLFVBQVVGLFlBQVlFLFVBQTVDLEVBQXdELFNBQVNELEtBQWpFO0FBQUE7QUFBQTtBQUhGO0FBREY7QUF2QkYsR0FERjtBQWlDRCxDQW5DRDs7QUFzQ0FQLGNBQWMsMEJBQVU7QUFDdEJVLFFBQU0sYUFEZ0I7QUFFdEJuQjtBQUZzQixDQUFWLEVBR1hTLFdBSFcsQ0FBZDs7QUFNQSxTQUFTVyxlQUFULENBQTBCQyxLQUExQixFQUFpQztBQUMvQixTQUFPO0FBQ0xYLHFCQUFpQix3Q0FBd0JXLEtBQXhCLENBRFo7QUFFTEMsbUJBQWUsd0NBQXdCRCxLQUF4QixLQUFrQyxFQUFDbEIsTUFBTSxFQUFQLEVBQVdDLE9BQU8sQ0FBbEI7QUFGNUMsR0FBUDtBQUlEOztBQUdELFNBQVNtQixrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0M7QUFDcEMsU0FBTztBQUNMWixtQkFBZSx1QkFBQ1YsTUFBRDtBQUFBLGFBQVlzQixTQUFTLG1DQUFxQnRCLE1BQXJCLENBQVQsQ0FBWjtBQUFBLEtBRFY7QUFFTFcsbUJBQWUsdUJBQUNYLE1BQUQ7QUFBQSxhQUFZc0IsU0FBUyxtQ0FBcUJ0QixNQUFyQixDQUFULENBQVo7QUFBQTtBQUZWLEdBQVA7QUFJRDs7QUFHRE8sY0FBYyx5QkFBUVcsZUFBUixFQUF5Qkcsa0JBQXpCLEVBQTZDZCxXQUE3QyxDQUFkOztrQkFFZUEsVyIsImZpbGUiOiI0MzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBGaWVsZCwgcmVkdXhGb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uR3JvdXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IHsgYWRkTmV3UHJvZHVjdFJlcXVlc3QsIHVwZGF0ZVByb2R1Y3RSZXF1ZXN0IH0gZnJvbSAnLi9hY3Rpb25zJ1xyXG5pbXBvcnQgeyBzZWxlY3RlZFByb2R1Y3RTZWxlY3RvciB9IGZyb20gJy4vc2VsZWN0b3JzJztcclxuXHJcbmltcG9ydCBGb3JtSW5wdXRGaWVsZCBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1JbnB1dEZpZWxkJztcclxuXHJcbmNvbnN0IHZhbGlkYXRlID0gdmFsdWVzID0+IHtcclxuXHJcbiAgY29uc3QgZXJyb3JzID0ge31cclxuXHJcbiAgaWYgKCF2YWx1ZXMubmFtZSkge1xyXG4gICAgZXJyb3JzLm5hbWUgPSAnUmVxdWlyZWQnXHJcbiAgfVxyXG5cclxuICBpZiAoIXZhbHVlcy5wcmljZSkge1xyXG4gICAgZXJyb3JzLnByaWNlID0gJ1JlcXVpcmVkJ1xyXG4gIH0gZWxzZSBpZiAoaXNOYU4oTnVtYmVyKHZhbHVlcy5wcmljZSkpKSB7XHJcbiAgICBlcnJvcnMucHJpY2UgPSAnTXVzdCBiZSBhIG51bWJlcidcclxuICB9IGVsc2UgaWYgKE51bWJlcih2YWx1ZXMucHJpY2UpIDwgMCkge1xyXG4gICAgZXJyb3JzLnByaWNlID0gJ1ByaWNlIG11c3QgYmUgZXF1YWwgb3IgZ3JlYXRlciB0aGFuIDAnXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXJyb3JzXHJcbn1cclxuXHJcbmNvbnN0IHRvTnVtYmVyID0gdmFsdWUgPT4gTnVtYmVyKHZhbHVlKTtcclxuXHJcbmxldCBGb3JtUHJvZHVjdCA9ICh7c2VsZWN0ZWRQcm9kdWN0LCBoYW5kbGVTdWJtaXQsIGFkZE5ld1Byb2R1Y3QsIHVwZGF0ZVByb2R1Y3QsIGxvYWQsIHByaXN0aW5lLCByZXNldCwgc3VibWl0dGluZyB9KSA9PiB7XHJcbiAgY29uc3Qgc3VibWl0Rm4gPSBzZWxlY3RlZFByb2R1Y3QgPyB1cGRhdGVQcm9kdWN0IDogYWRkTmV3UHJvZHVjdFxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdEZuKX0+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD17Rm9ybUlucHV0RmllbGR9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBjb21wb25lbnQ9e0Zvcm1JbnB1dEZpZWxkfVxyXG4gICAgICAgICAgICBsYWJlbD1cIlByaWNlXCJcclxuICAgICAgICAgICAgcGFyc2U9e3RvTnVtYmVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEJ1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgeyBzZWxlY3RlZFByb2R1Y3QgPyAgPEJ1dHRvbiBic1N0eWxlPVwiaW5mb1wiIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17cHJpc3RpbmUgfHwgc3VibWl0dGluZ30+U3VibWl0IENoYW5nZXM8L0J1dHRvbj4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cInN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e3ByaXN0aW5lIHx8IHN1Ym1pdHRpbmd9PkFkZCBOZXcgUHJvZHVjdDwvQnV0dG9uPiB9XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17cHJpc3RpbmUgfHwgc3VibWl0dGluZ30gb25DbGljaz17cmVzZXR9PlVuZG8gQ2hhbmdlczwvQnV0dG9uPlxyXG4gICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gIClcclxufVxyXG5cclxuXHJcbkZvcm1Qcm9kdWN0ID0gcmVkdXhGb3JtKHtcclxuICBmb3JtOiAncHJvZHVjdEZyb20nLFxyXG4gIHZhbGlkYXRlXHJcbn0pKEZvcm1Qcm9kdWN0KTtcclxuXHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMgKHN0YXRlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNlbGVjdGVkUHJvZHVjdDogc2VsZWN0ZWRQcm9kdWN0U2VsZWN0b3Ioc3RhdGUpLFxyXG4gICAgaW5pdGlhbFZhbHVlczogc2VsZWN0ZWRQcm9kdWN0U2VsZWN0b3Ioc3RhdGUpIHx8IHtuYW1lOiBcIlwiLCBwcmljZTogMH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICByZXR1cm4ge1xyXG4gICAgYWRkTmV3UHJvZHVjdDogKHZhbHVlcykgPT4gZGlzcGF0Y2goYWRkTmV3UHJvZHVjdFJlcXVlc3QodmFsdWVzKSksXHJcbiAgICB1cGRhdGVQcm9kdWN0OiAodmFsdWVzKSA9PiBkaXNwYXRjaCh1cGRhdGVQcm9kdWN0UmVxdWVzdCh2YWx1ZXMpKVxyXG4gIH1cclxufVxyXG5cclxuXHJcbkZvcm1Qcm9kdWN0ID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRm9ybVByb2R1Y3QpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybVByb2R1Y3Q7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Qcm9kdWN0cy9Gb3JtUHJvZHVjdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})