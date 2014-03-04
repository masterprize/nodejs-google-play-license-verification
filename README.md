

# android-market-license-verification-nodejs

nodejs implementation of php library http://code.google.com/p/android-market-license-verification

## Usage

1. Include library to project
2. Create new Object ResponseValidator.AndroidMarket_Licensing_ResponseValidator
  by passing into constructor your public RSA-key (from google developer console)
  and your package name (for example com.test.app)
3. Call method verify or created object by passing into one response data and signature received from google.


## Developing



### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
