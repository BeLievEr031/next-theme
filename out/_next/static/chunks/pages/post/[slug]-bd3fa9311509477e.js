(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [515],
  {
    52306: function (n, t, u) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/post/[slug]",
        function () {
          return u(55063);
        },
      ]);
    },
    55063: function (n, t, u) {
      "use strict";
      u.r(t);
      var e = u(85893),
        s = u(67294),
        o = u(11579),
        c = u(11163),
        r = u(2601),
        i = u(9473),
        _ = u(54506);
      u(25935),
        (t.default = function () {
          let n = (0, c.useRouter)(),
            t = (0, i.I0)(),
            { slug: u } = n.query,
            { singlePost: f } = (0, i.v9)((n) => n.posts);
          return (
            console.log(u),
            (0, s.useEffect)(() => {
              t((0, _.JF)(u));
            }, [u]),
            (0, e.jsx)(o.Z, {
              children: (0, e.jsx)("div", {
                children: f.data && (0, e.jsx)(r.Z, { post: f.data }),
              }),
            })
          );
        });
    },
  },
  function (n) {
    n.O(0, [168, 437, 774, 888, 179], function () {
      return n((n.s = 52306));
    }),
      (_N_E = n.O());
  },
]);
