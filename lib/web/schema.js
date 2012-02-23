// This is the schema definition for devopsjson
exports.schema = {
    'type': 'object',
    'properties': {
        'name': {
            'description': 'Name of your project, format for display',
            'type': 'string',
            'optional': false
        },
        'description': {
            'description': 'Description of your project, format for display',
            'type': 'string',
            'optional': false
        },
        'tags': {
            'description': 'Tags related to your project for searching',
            'type': 'array',
            'optional': false,
            'items': {
                'type': 'string',
                'optional': true
            }
            //uniqueItems
        },
        'contacts': {
            'description': 'Individual team member contact information',
            'type': 'array',
            'optional': false,
            'items': {
                'type': 'object',
                'optional': true,
                'properties': {
                    'team_name': {
                        'type': 'string',
                        'optional': false,
                    },
                    'members': {
                        'type': 'array',
                        'optional': false,
                        'items': {
                            'type': 'object',
                            'optional': false,
                            'properties': {
                                'name': {
                                    'type': 'string',
                                    'optional': false,
                                },
                                'sso': {
                                    'type': 'string',
                                    'optional': false,
                                }
                            },
                            'additionalProperties': {
                                'type': 'string'
                            }
                        }
                    }
                }
            }
        },
        'links': {
            'description': 'Related useful links (ie source, docs)',
            'type': 'object',
            'optional': false,
            'additionalProperties': {
                'type': 'string'
            }
        },
        'environments': {
            'description': 'List of supported development environments',
            'type': 'array',
            'optional': false,
            'items': {
                'type': 'object',
                'optional': true,
                'properties': {
                    'type': {
                        'type': 'string',
                        'optional': false
                    },
                    'platforms': {
                        'type': 'array',
                        'optional': false,
                        'items': {
                            'type': 'string',
                            'optional': true
                        }
                    },
                    'url': {
                        'type': 'object',
                        'optional': true,
                        'properties': {
                            'url': {
                                'type': 'string',
                                'optional': false
                            },
                            'auth': {
                                'type': 'object',
                                'optional': true,
                                'properties': {
                                    'type': {
                                        'type': 'string',
                                        'optional': false
                                    },
                                    'username': {
                                        'type': 'string',
                                        'optional': true
                                    },
                                    'password': {
                                        'type': 'string',
                                        'optional': true
                                    }
                                }
                            }
                        }
                    },
                    'regions': {
                        'type': 'array',
                        'optional': true,
                        'items': {
                            'type': 'string',
                            'optional': true
                        }
                    }
                }
            }
        },
        'metadata': {
            'description': 'Information about this JSON file',
            'type': 'object',
            'optional': false,
            'properties': {
                'current_version': {
                    'type': 'string',
                    'optional': false
                },
                'date_deployed': {
                    'type': 'integer',
                    'optional': false
                }
            }
        },
        'related_apis': {
            'description': 'APIs related to this product',
            'type': 'object',
            'optional': false,
            'additionalProperties': {
                'type': 'object',
                'optional': true,
                'additionalProperties': {
                    'type': 'string'
                }
            }
        },
        'dependent_services': {
            'description': 'Links to JSON files this product depends upon',
            'type': 'array',
            'optional': false,
            'items': {
                'type': 'string',
                'optional': true
            }
        },
        'kpi_spec': {
            'type': 'string',
            'optional': true
        }
    }
};
