const graphProps  = {
    "records": [
        {
            "keys": [
                "nodes",
                "relationships"
            ],
            "length": 2,
            "_fields": [
                [
                    {
                        "identity": {
                            "low": -87,
                            "high": -1
                        },
                        "labels": [
                            "TechCategory"
                        ],
                        "properties": {
                            "name": "TechCategory",
                            "indexes": [],
                            "constraints": []
                        }
                    },
                    {
                        "identity": {
                            "low": -81,
                            "high": -1
                        },
                        "labels": [
                            "ITComponent"
                        ],
                        "properties": {
                            "name": "ITComponent",
                            "indexes": [],
                            "constraints": []
                        }
                    },
                    {
                        "identity": {
                            "low": -82,
                            "high": -1
                        },
                        "labels": [
                            "Process"
                        ],
                        "properties": {
                            "name": "Process",
                            "indexes": [],
                            "constraints": []
                        }
                    },
                    {
                        "identity": {
                            "low": -89,
                            "high": -1
                        },
                        "labels": [
                            "Vulnerability"
                        ],
                        "properties": {
                            "name": "Vulnerability",
                            "indexes": [],
                            "constraints": []
                        }
                    },
                    {
                        "identity": {
                            "low": -90,
                            "high": -1
                        },
                        "labels": [
                            "Machine"
                        ],
                        "properties": {
                            "name": "Machine",
                            "indexes": [],
                            "constraints": []
                        }
                    },
                    {
                        "identity": {
                            "low": -83,
                            "high": -1
                        },
                        "labels": [
                            "UserGroup"
                        ],
                        "properties": {
                            "name": "UserGroup",
                            "indexes": [],
                            "constraints": []
                        }
                    },
                    {
                        "identity": {
                            "low": -86,
                            "high": -1
                        },
                        "labels": [
                            "Provider"
                        ],
                        "properties": {
                            "name": "Provider",
                            "indexes": [],
                            "constraints": []
                        }
                    },
                    {
                        "identity": {
                            "low": -85,
                            "high": -1
                        },
                        "labels": [
                            "DataObject"
                        ],
                        "properties": {
                            "name": "DataObject",
                            "indexes": [],
                            "constraints": []
                        }
                    },
                    {
                        "identity": {
                            "low": -80,
                            "high": -1
                        },
                        "labels": [
                            "Application"
                        ],
                        "properties": {
                            "name": "Application",
                            "indexes": [],
                            "constraints": []
                        }
                    },
                    {
                        "identity": {
                            "low": -88,
                            "high": -1
                        },
                        "labels": [
                            "Patch"
                        ],
                        "properties": {
                            "name": "Patch",
                            "indexes": [],
                            "constraints": []
                        }
                    },
                    {
                        "identity": {
                            "low": -84,
                            "high": -1
                        },
                        "labels": [
                            "Interface"
                        ],
                        "properties": {
                            "name": "Interface",
                            "indexes": [],
                            "constraints": []
                        }
                    },
                    {
                        "identity": {
                            "low": -79,
                            "high": -1
                        },
                        "labels": [
                            "BusinessCapability"
                        ],
                        "properties": {
                            "name": "BusinessCapability",
                            "indexes": [],
                            "constraints": []
                        }
                    }
                ],
                [
                    {
                        "identity": {
                            "low": -115,
                            "high": -1
                        },
                        "start": {
                            "low": -80,
                            "high": -1
                        },
                        "end": {
                            "low": -84,
                            "high": -1
                        },
                        "type": "CONSUMES_INTERFACE",
                        "properties": {}
                    },
                    {
                        "identity": {
                            "low": -111,
                            "high": -1
                        },
                        "start": {
                            "low": -80,
                            "high": -1
                        },
                        "end": {
                            "low": -81,
                            "high": -1
                        },
                        "type": "HAS_IT_COMPONENTS",
                        "properties": {}
                    },
                    {
                        "identity": {
                            "low": -122,
                            "high": -1
                        },
                        "start": {
                            "low": -81,
                            "high": -1
                        },
                        "end": {
                            "low": -89,
                            "high": -1
                        },
                        "type": "HAS_VULNERABILITY",
                        "properties": {}
                    },
                    {
                        "identity": {
                            "low": -120,
                            "high": -1
                        },
                        "start": {
                            "low": -87,
                            "high": -1
                        },
                        "end": {
                            "low": -87,
                            "high": -1
                        },
                        "type": "HAS_CHILD_CATEGORY",
                        "properties": {}
                    },
                    {
                        "identity": {
                            "low": -109,
                            "high": -1
                        },
                        "start": {
                            "low": -79,
                            "high": -1
                        },
                        "end": {
                            "low": -79,
                            "high": -1
                        },
                        "type": "HAS_CHILD_CAPABILITY",
                        "properties": {}
                    },
                    {
                        "identity": {
                            "low": -123,
                            "high": -1
                        },
                        "start": {
                            "low": -88,
                            "high": -1
                        },
                        "end": {
                            "low": -89,
                            "high": -1
                        },
                        "type": "PATCHES",
                        "properties": {}
                    },
                    {
                        "identity": {
                            "low": -121,
                            "high": -1
                        },
                        "start": {
                            "low": -81,
                            "high": -1
                        },
                        "end": {
                            "low": -87,
                            "high": -1
                        },
                        "type": "IS_OF_TECH_TYPE",
                        "properties": {}
                    },
                    {
                        "identity": {
                            "low": -124,
                            "high": -1
                        },
                        "start": {
                            "low": -90,
                            "high": -1
                        },
                        "end": {
                            "low": -81,
                            "high": -1
                        },
                        "type": "HAS_INSTANCE_OF",
                        "properties": {}
                    },
                    {
                        "identity": {
                            "low": -113,
                            "high": -1
                        },
                        "start": {
                            "low": -80,
                            "high": -1
                        },
                        "end": {
                            "low": -83,
                            "high": -1
                        },
                        "type": "USED_BY_USERS",
                        "properties": {}
                    },
                    {
                        "identity": {
                            "low": -125,
                            "high": -1
                        },
                        "start": {
                            "low": -90,
                            "high": -1
                        },
                        "end": {
                            "low": -88,
                            "high": -1
                        },
                        "type": "PATCHED_BY",
                        "properties": {}
                    },
                    {
                        "identity": {
                            "low": -126,
                            "high": -1
                        },
                        "start": {
                            "low": -90,
                            "high": -1
                        },
                        "end": {
                            "low": -80,
                            "high": -1
                        },
                        "type": "HOSTS_APPLICATION",
                        "properties": {}
                    },
                    {
                        "identity": {
                            "low": -117,
                            "high": -1
                        },
                        "start": {
                            "low": -84,
                            "high": -1
                        },
                        "end": {
                            "low": -81,
                            "high": -1
                        },
                        "type": "RELATED_IT_COMPONENTS",
                        "properties": {}
                    },
                    {
                        "identity": {
                            "low": -118,
                            "high": -1
                        },
                        "start": {
                            "low": -80,
                            "high": -1
                        },
                        "end": {
                            "low": -85,
                            "high": -1
                        },
                        "type": "RELATED_DATA",
                        "properties": {}
                    },
                    {
                        "identity": {
                            "low": -116,
                            "high": -1
                        },
                        "start": {
                            "low": -84,
                            "high": -1
                        },
                        "end": {
                            "low": -85,
                            "high": -1
                        },
                        "type": "RELATED_DATA_OBJECTS",
                        "properties": {}
                    },
                    {
                        "identity": {
                            "low": -114,
                            "high": -1
                        },
                        "start": {
                            "low": -80,
                            "high": -1
                        },
                        "end": {
                            "low": -84,
                            "high": -1
                        },
                        "type": "PROVIDES_INTERFACE",
                        "properties": {}
                    },
                    {
                        "identity": {
                            "low": -119,
                            "high": -1
                        },
                        "start": {
                            "low": -86,
                            "high": -1
                        },
                        "end": {
                            "low": -81,
                            "high": -1
                        },
                        "type": "PROVIDES_IT_COMPONENT",
                        "properties": {}
                    },
                    {
                        "identity": {
                            "low": -110,
                            "high": -1
                        },
                        "start": {
                            "low": -80,
                            "high": -1
                        },
                        "end": {
                            "low": -79,
                            "high": -1
                        },
                        "type": "PROVIDES_CAPABILITY",
                        "properties": {}
                    },
                    {
                        "identity": {
                            "low": -112,
                            "high": -1
                        },
                        "start": {
                            "low": -80,
                            "high": -1
                        },
                        "end": {
                            "low": -82,
                            "high": -1
                        },
                        "type": "SUPPORTS_PROCESS",
                        "properties": {}
                    }
                ]
            ],
            "_fieldLookup": {
                "nodes": 0,
                "relationships": 1
            }
        }
    ],
    "extensions": {
        "advanced-charts": true,
        "styling": true,
        "actions": true
    },
    "selection": {
        "TechCategory": "name",
        "ITComponent": "name",
        "Process": "name",
        "Vulnerability": "name",
        "Machine": "name",
        "UserGroup": "name",
        "Provider": "name",
        "DataObject": "name",
        "Application": "name",
        "Patch": "name",
        "Interface": "name",
        "BusinessCapability": "(label)"
    },
    "settings": {
        "nodePositions": {}
    },
    "fullscreen": false,
    "dimensions": {
        "width": 411,
        "height": 424
    },
    "parameters": {}
}

export default graphProps;