/**
 * Created by bohoffi on 29.05.2017.
 */
export default {
    entry: 'index.js',
    dest: 'bundles/ngx-airtable.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ngx.airtable',
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        '@angular/http': 'ng.http',
        'rxjs/Observable': 'Rx',
        'rxjs/Subscription': 'Rx',
        'rxjs/add/observable/fromEvent': 'Rx.Observable.prototype',
        'rxjs/add/observable/debounceTime': 'Rx.Observable.prototype'
    },
    external: [
        '@angular/core',
        '@angular/common',
        '@angular/http',
        'rxjs/Observable',
        'rxjs/add/observable/defer',
        'rxjs/add/observable/empty',
        'rxjs/add/observable/of',
        'rxjs/add/operator/filter',
        'rxjs/add/operator/map',
        'rxjs/add/operator/mergeMap',
        'rxjs/add/operator/merge',
    ]
}