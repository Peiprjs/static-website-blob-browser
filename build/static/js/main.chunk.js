(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    18: function(e, t) {},
    35: function(e, t, a) {
      e.exports = a(36);
    },
    36: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(22),
        i = a(23),
        r = a(32),
        s = a(24),
        o = a(33),
        c = a(14),
        d = a(6),
        l = a.n(d),
        p = a(25),
        m = a(26),
        f = a.n(m),
        u = (a(42), a(31)),
        h = (a(46), a(55)),
        b = a(15),
        g = a(57),
        w = a(56),
        v = a(54),
        k = (function(e) {
          function t() {
            var e;
            return (
              Object(n.a)(this, t),
              ((e = Object(r.a)(this, Object(s.a)(t).call(this))).state = {
                data: [],
                pages: 5,
                markers: [],
                loading: !0,
                prefix: ""
              }),
              (e.fetchData = e.listBlobs.bind(Object(c.a)(Object(c.a)(e)))),
              e
            );
          }
          return (
            Object(o.a)(t, e),
            Object(i.a)(t, [
              {
                key: "listBlobs",
                value: function(e, t) {
                  var a = this;
                  this.setState({ loading: !0 });
                  var n = new h.a(),
                    i = b.a.newPipeline(n),
                    r = new g.a(
                      "https://".concat(
                        "mscssstatic",
                        ".blob.core.windows.net"
                      ),
                      i
                    ),
                    s = w.a.fromServiceURL(r, "staticwebsite"),
                    o = new URLSearchParams(window.location.search).get(
                      "prefix"
                    );
                  s.listBlobHierarchySegment(v.a.none, "/", e.markers[e.page], {
                    maxresults: e.pageSize,
                    prefix: o
                  }).then(function(t) {
                    var n = e.markers.slice(),
                      i = e.page + 1;
                    t.nextMarker && ((n[e.page + 1] = t.nextMarker), i++),
                      Array.prototype.push.apply(
                        t.segment.blobItems,
                        t.segment.blobPrefixes
                      );
                    for (
                      var r = f.a.orderBy(
                          t.segment.blobItems,
                          e.sorted.map(function(e) {
                            return function(t) {
                              return null === t[e.id]
                                ? -1 / 0
                                : void 0 === t[e.id]
                                ? void 0 === t.properties
                                  ? -1 / 0
                                  : t.properties[e.id]
                                : "string" === typeof t[e.id]
                                ? t[e.id].toLowerCase()
                                : t[e.id];
                            };
                          }),
                          e.sorted.map(function(e) {
                            return e.desc ? "desc" : "asc";
                          })
                        ),
                        s = 0;
                      s < r.length;
                      s++
                    )
                      "asset-manifest.json" == r[s].name && r.splice(s, 1),
                        "favicon.ico" == r[s].name && r.splice(s, 1),
                        "index.html" == r[s].name && r.splice(s, 1),
                        "manifest.json" == r[s].name && r.splice(s, 1),
                        "precache-manifest.js" ==
                          r[s].name && r.splice(s, 1),
                        "service-worker.js" == r[s].name && r.splice(s, 1),
                        "static/" == r[s].name && r.splice(s, 1);
                    a.setState({
                      data: r,
                      pages: i,
                      markers: n,
                      loading: !1,
                      prefix: o
                    });
                  });
                }
              },
              {
                key: "renderLink",
                value: function(e) {
                  var t =
                    "https://mscssstatic.blob.core.windows.net/staticwebsite";
                  return (
                    "../" === e
                      ? (t += "/index.html")
                      : "/" === e.slice(-1)
                      ? (t = "?prefix=" + e)
                      : (t += "/" + e),
                    l.a.createElement("a", { href: t }, e)
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state,
                    a = t.data,
                    n = t.pages,
                    i = t.markers,
                    r = t.loading,
                    s = a;
                  return (
                    null !== t.prefix && (s = [{ name: "../" }].concat(s)),
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(u.a, {
                        columns: [
                          {
                            Header: "Blob Name",
                            id: "name",
                            accessor: "name",
                            Cell: function(t) {
                              return e.renderLink(t.value);
                            }
                          },
                          {
                            Header: "Last Modified",
                            id: "lastModified",
                            accessor: function(e) {
                              if ("undefined" !== typeof e.properties)
                                return e.properties.lastModified.toISOString();
                            },
                            maxWidth: 400
                          },
                          {
                            Header: "Content Length",
                            id: "contentLength",
                            accessor: function(e) {
                              if ("undefined" !== typeof e.properties)
                                return e.properties.contentLength;
                            },
                            maxWidth: 200
                          }
                        ],
                        manual: !0,
                        data: s,
                        pages: n,
                        markers: i,
                        loading: r,
                        onFetchData: this.fetchData,
                        defaultPageSize: 10,
                        className: "-striped -highlight"
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(l.a.Component);
      Object(p.render)(
        l.a.createElement(k, null),
        document.getElementById("root")
      );
    },
    42: function(e, t, a) {}
  },
  [[35, 2, 1]]
]);
//# sourceMappingURL=main.chunk.js.map
