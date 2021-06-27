module.exports = [
  {
      'type': 'pattern',
      'name': 'Padding (all edges) V',
      'matcher': 'PV',
      'shorthand': true,
      'allowParamToValue': true,
      customProperties: true,
      'styles': {
          'padding': 'var(--$0)'
      }
  },
  // X axis
  {
      'type': 'pattern',
      'name': 'Padding (X axis) V',
      'matcher': 'PxV',
      'allowParamToValue': true,
      customProperties: true,
      'styles': {
          'padding-__START__': 'var(--$0)',
          'padding-__END__': 'var(--$0)'
      }
  },
  // Y axis
  {
      'type': 'pattern',
      'name': 'Padding (Y axis) V',
      'matcher': 'PyV',
      'allowParamToValue': true,
      customProperties: true,
      'styles': {
          'padding-top': 'var(--$0)',
          'padding-bottom': 'var(--$0)'
      }
  },
  // top
  {
      'type': 'pattern',
      'name': 'Padding top V',
      'matcher': 'PtV',
      'allowParamToValue': true,
      customProperties: true,
      'styles': {
          'padding-top': 'var(--$0)'
      }
  },
  // end
  {
      'type': 'pattern',
      'name': 'Padding end V',
      'matcher': 'PendV',
      'allowParamToValue': true,
      customProperties: true,
      'styles': {
          'padding-__END__': 'var(--$0)'
      }
  },
  // bottom
  {
      'type': 'pattern',
      'name': 'Padding bottom V',
      'matcher': 'PbV',
      'allowParamToValue': true,
      customProperties: true,
      'styles': {
          'padding-bottom': 'var(--$0)'
      }
  },
  // start
  {
      'type': 'pattern',
      'name': 'Padding start V',
      'matcher': 'PstartV',
      'allowParamToValue': true,
      customProperties: true,
      'styles': {
          'padding-__START__': 'var(--$0)'
      }
  },
]
