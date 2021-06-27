module.exports = [
  {
    type: "pattern",
    name: "BdrsV",
    matcher: "BdrsV",
    customProperties: true,
    styles: {
      'border-radius': 'var(--$0)',
    }
  },
  {
    type: "helper",
    name: "BdrsV Default",
    matcher: "BdrsV",
    noParams: true,
    customProperties: true,
    styles: {
      'border-radius': 'var(--bdrsv-default)',
    }
  }
];
