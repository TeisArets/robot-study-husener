// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.PostMessage",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Ambivalenz gegenüber KI",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Main study",
      "shuffle": true,
      "plugins": [
        {
          "type": "fullscreen",
          "message": "",
          "hint": "",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "content": [
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Selbstreport",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": "Im Folgenden präsentieren wir dir Bilder von Robotern. \u003Cbr\u003E\nBei jedem Bild bitten wir dich um eine Einschätzung, wie du den Roboter beschreiben würdest. Dazu wirst du in zufälliger Reihenfolge gefragt, ob du der Aussage, dass der Roboter als \u003Cstrong\u003Emaskulin, feminin oder geschlechtsneutral\u003C\u002Fstrong\u003E beschrieben werden kann, zustimmst oder sie ablehnst. Zusätzlich fragen wir dich, wie hin und hergerissen du dich in deinen Antworten fühlst.\u003Cbr\u003E\nEs kann sein, dass du zu manchen Bildern eine klare Meinung hast, es kann aber auch sein, dass du dich bei einigen Bildern hin- und hergerissen fühlst oder sie neutral siehst. Hierbei gibt es keine richtigen oder falschen Antworten, uns interessiert nur deine persönliche Meinung.\n"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Weiter→",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Selfreport Instruktion"
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "Pictures_SR": "Aila_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Albert-hubo_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Buddy_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Cosero_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Emys_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Erica_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Furo_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Gazeroid_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Gemini_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Geminoid-H1-4_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Han_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Inmoov_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Ipal_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Jia jia_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Kirobo_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Kobian_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Kodomoroid_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Mertz_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Nadine_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Nao_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Otonaroid_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Reem_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Robina_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Sanbot_max_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Seer_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "SociBot-mini_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Topio_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Topio-Dio_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Waseda_small.jpg",
                  "": ""
                },
                {
                  "Pictures_SR": "Zeno_small.jpg",
                  "": ""
                }
              ],
              "sample": {
                "mode": "draw-shuffle"
              },
              "files": {
                "Aila_small.jpg": "embedded\u002Fd2edea3b6505f052f82123ba20de471bc95fa7324060294cebc156c77f786237.jpg",
                "Albert-hubo_small.jpg": "embedded\u002F3874c1057ec758e8ae780bd90abaa7523c46637e8a5829bfceb203cfd325650c.jpg",
                "Amigo_small.jpg": "embedded\u002F56d56839d98903f78ac181a449cdeb5fcb56bf178bc37a44f9a42d9137b24231.jpg",
                "Buddy_small.jpg": "embedded\u002F102c17d66b2ebf99b14aaaead716aae6adad75a1bc80086ae1904f02be499837.jpg",
                "Cosero_small.jpg": "embedded\u002Fa93159ac1aac96d2d5e3d288d720dfd084d55f928169267fde5f76804227fe8f.jpg",
                "Discorobo_small.jpg": "embedded\u002Fed2c6d4f627acbfd7820a79b53972f57f320f73c84954e2fafa3a09ae873d5e3.jpg",
                "DURUS_small.jpg": "embedded\u002F18c43d8936a55398a2389a8128aaf775baaa055d53d6f520f453f81f561c21ee.jpg",
                "Emiew_small.jpg": "embedded\u002F33c1bfee2cee710f8956380e190509dc8301b57d1dee00c06edfefbad6b25889.jpg",
                "Emys_small.jpg": "embedded\u002Fe573ac38196921790515731eb0280090408233cb8a3b274a6b662c673966c250.jpg",
                "Erica_small.jpg": "embedded\u002F1411817ee938bf850cd112387b7b46e092f71db90a0e8b5dbce9fdd75f2d9770.jpg",
                "Flash_small.jpg": "embedded\u002F18d1ba77b1b5ef68bf1cf66ed0afff1f8aa531f3b4a63604c0762f16f3289ed9.jpg",
                "Flobi_small.jpg": "embedded\u002F9741056a5108d15ead9d91c9b0ebdda22eddd361301bb571c152d8af5b37cdc4.jpg",
                "Furo_small.jpg": "embedded\u002Fd132c186422fa8c1a7ddd71d0ddb97bca4f79e632c7c694d2cb59046e492f659.jpg",
                "Gazeroid_small.jpg": "embedded\u002F305ac01de57e2bae9ce7ecfc433717d19b789641433c6c6e4848cb3fd37ed6ae.jpg",
                "Gemini_small.jpg": "embedded\u002F21f109e4798d917daffa5de2633ed4e973fa41a22a14ee2c53df7597eb21e1c3.jpg",
                "Geminoid-H1-4_small.jpg": "embedded\u002F4197176901f6afeb18c5a9dc73d74a4fce812639eeefdc324709ce5bba29ff46.jpg",
                "Han_small.jpg": "embedded\u002F59a053b9a5e9cf582d803537a3fdee87d2e780401c7d4702bfc09436bad777ea.jpg",
                "Inmoov_small.jpg": "embedded\u002F81095c3e8d81f2ae5c8156d500863b83f9c10adadc7b808247ede95c379da5d5.jpg",
                "Ipal_small.jpg": "embedded\u002Fd71a1b6aa7a34fee4d33125c249e4add99fea0bcc1055610985253df6adef95c.jpg",
                "Jia jia_small.jpg": "embedded\u002F5b077145a93bad4f14b4f32e6f80fe3831646f20d22b92848b2ce6a426d1dc01.jpg",
                "Kirobo_small.jpg": "embedded\u002F96b747884b5a4856c21b7d6cbb981f7f77f890df55d7284f5d7cfe6d6c1bc9dc.jpg",
                "Kobian_small.jpg": "embedded\u002F3687fba4ce487eb128547c99af15275e32c55a373cd12fc767f55ac7e5da22b5.jpg",
                "Kodomoroid_small.jpg": "embedded\u002F9aad6c2eceaf442b8b6c7a3b1bc3ea65cb6309fa59813dcb3600d4d1499015a1.jpg",
                "Mertz_small.jpg": "embedded\u002F4e8d7d2b2b8ddb091776e54ba9168506664749eefd88c95fa16525e4729361f7.jpg",
                "Millennia_small.jpg": "embedded\u002Fabc52e642f718152a9279ee63ed2e05ea7eaf147eaa797c4d7ca9f8a0360ecc8.jpg",
                "MiRAE_small.jpg": "embedded\u002F4f709779f97c4007415c295a13f6ec612022fb38b353bd5d96509436363a297a.jpg",
                "Nadine_small.jpg": "embedded\u002Fd370c6365bea2c49f621d9bfaea6c599965058131409c370984257cb54956ed1.jpg",
                "Nao_small.jpg": "embedded\u002F1d4aae7a54147b77ff26409f0117c40dfe2c778df6a90d06dcb22f192b14d04a.jpg",
                "Otonaroid_small.jpg": "embedded\u002F78bab18eab5c20c03bbc192bd08e12253774e9082e22cc127f80cdf3fc1f67f2.jpg",
                "Otto_small.jpg": "embedded\u002Fbaf0ab21aa8147cae343550fee58fc55b331be3327da68c535b199e96ab453e9.jpg",
                "Pepper_small.jpg": "embedded\u002F503a64673316d752e03ca8c35b7461bffe6a5e2fffff443a77eef84aef5462aa.jpg",
                "Personal-Robot_small.jpg": "embedded\u002Ff36359dc2c47f2a9da57b70e00beedc59c8850b6f4dc3ac2c935d2843c81f11d.jpg",
                "R3-1_small.jpg": "embedded\u002F8a79690689139d18d8d508a1201a3ea73d1100d360f9af93be414eed596fca70.jpg",
                "Reem_small.jpg": "embedded\u002F2116d180510a52d6eec27bfc3bf65b9fb12f6a1c6c77c8c1682e36699007b769.jpg",
                "Robina_small.jpg": "embedded\u002F8615aaefb01615a9e37f5caa174d53f3e267b60f141dde104ca5c3e2fcd83078.jpg",
                "Romeo_small.jpg": "embedded\u002Fcce8bae7d4c3e9be45818445964fe408f32f6e328f821fbfbbe78354c42f7cae.jpg",
                "Sanbot_max_small.jpg": "embedded\u002F240351dfcd14d309f164a3f0af0b202d331d992f65163a8232dd77d6697078f8.jpg",
                "Sanbot_nano_small.jpg": "embedded\u002F7453463d244063326c334feb3f1408307c0cfe109e1c22b1fe075579dfd3e784.jpg",
                "Seer_small.jpg": "embedded\u002F3a493eec942d3f1a731bf58502d3b5d31dc12d15c4904c22559dc45c2403e0f0.jpg",
                "Slate_small.jpg": "embedded\u002Fc7f37c40f9b5284785a4c2ed6cf1e0d00eba63ea10cb4f175e5db5b1b839a34c.jpg",
                "SociBot-mini_small.jpg": "embedded\u002F3afee33750ff4b3fba17d8373ce35977fc0aa1929586ed95dabd264fd1ad837e.jpg",
                "Sophia_small.jpg": "embedded\u002F11b84a77f4a3b2d26ec1de198b96e36705dfd193e67c3cf5078e581f7d4e2605.jpg",
                "Speech_buddy_small.jpg": "embedded\u002Fa49d2d04b890c557c3f041ed494a5a50e641a2d1c198d355a1367ef3acf275fd.jpg",
                "Thr3_small.jpg": "embedded\u002Fe82abecd89d223875c99b4e36486312def649bb30ff1f0dae6c0b30f14fb7a59.jpg",
                "Topio_small.jpg": "embedded\u002F12b2f44fd42201043ff18e6b5a19baf7e72009ac9ed9916dd76bbb285980d24b.jpg",
                "Topio-Dio_small.jpg": "embedded\u002F830d367c3187eb58fd4469566e579f6c4fe922c5493be3489676e8b5c37395ce.jpg",
                "Walker_small.jpg": "embedded\u002F45dbdb3865521ca9b2fbcfb1cb278beec86439aff42fddfe2e8359650e52b931.jpg",
                "Waseda_small.jpg": "embedded\u002Ff0e645713f49d18661d073d0b04be317c3b17dcafcd648b83c6fb65d65b13f9c.jpg",
                "Zeno_small.jpg": "embedded\u002Fa9c84a41e2114b30fddccbea1afd8c2e5f0e38d0fbd4c5cafdf0241746849808.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Selbstreport_pics-loop",
              "plugins": [],
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Sequence: Bewertung eines Roboters",
                "content": [
                  {
                    "type": "lab.flow.Sequence",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Sequence: Geschlechtsitems randomisiert",
                    "shuffle": true,
                    "content": [
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "image",
                            "src": "${ this.files[this.parameters.Pictures_SR] }",
                            "name": ""
                          },
                          {
                            "required": true,
                            "type": "likert",
                            "items": [
                              {
                                "label": "Feminin",
                                "coding": "Feminin"
                              }
                            ],
                            "width": "7",
                            "anchors": [
                              "Stimme überhaupt nicht zu",
                              "Stimme nicht zu",
                              "Stimme eher nicht zu",
                              "Neutral",
                              "Stimme eher zu",
                              "Stimme zu",
                              "Stimme völlig zu"
                            ],
                            "label": "Wie würdest du den Roboter auf diesem Bild beschreiben?",
                            "name": "Description_Robot"
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Weiter →",
                        "submitButtonPosition": "right",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "Feminin"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "image",
                            "src": "${ this.files[this.parameters.Pictures_SR] }",
                            "name": ""
                          },
                          {
                            "required": true,
                            "type": "likert",
                            "items": [
                              {
                                "label": "Maskulin",
                                "coding": "Maskulin"
                              }
                            ],
                            "width": "7",
                            "anchors": [
                              "Stimme überhaupt nicht zu",
                              "Stimme nicht zu",
                              "Stimme eher nicht zu",
                              "Neutral",
                              "Stimme eher zu",
                              "Stimme zu",
                              "Stimme völlig zu"
                            ],
                            "label": "Wie würdest du den Roboter auf diesem Bild beschreiben?",
                            "name": "Description_Robot"
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Weiter →",
                        "submitButtonPosition": "right",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "Maskulin"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "image",
                            "src": "${ this.files[this.parameters.Pictures_SR] }",
                            "name": ""
                          },
                          {
                            "required": true,
                            "type": "likert",
                            "items": [
                              {
                                "label": "Geschlechtsneutral",
                                "coding": "Geschlechtsneutral"
                              }
                            ],
                            "width": "7",
                            "anchors": [
                              "Stimme überhaupt nicht zu",
                              "Stimme nicht zu",
                              "Stimme eher nicht zu",
                              "Neutral",
                              "Stimme eher zu",
                              "Stimme zu",
                              "Stimme völlig zu"
                            ],
                            "label": "Wie würdest du den Roboter auf diesem Bild beschreiben?",
                            "name": "Description_Robot"
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Weiter→",
                        "submitButtonPosition": "right",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "Geschlechtsneutral"
                      }
                    ]
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "required": true,
                        "type": "image",
                        "src": "${ this.files[this.parameters.Pictures_SR] }",
                        "name": ""
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "\u003Cp\u003EWenn du nur an die \u003Cstrong\u003Efemininen\u003C\u002Fstrong\u003E Aspekte des Roboters denkst und die maskulinen ignorierst, \u003Cstrong\u003Ewie feminin nimmst du diesen Roboter wahr\u003C\u002Fstrong\u003E? \u003C\u002Fp\u003E",
                        "options": [
                          {
                            "label": "Gar nicht feminin",
                            "coding": "1"
                          },
                          {
                            "label": "Nicht feminin",
                            "coding": "2"
                          },
                          {
                            "label": "Eher nicht feminin",
                            "coding": "3"
                          },
                          {
                            "label": "Neutral",
                            "coding": "4"
                          },
                          {
                            "label": "Eher feminin",
                            "coding": "5"
                          },
                          {
                            "label": "Feminin",
                            "coding": "6"
                          },
                          {
                            "label": "Völlig feminin",
                            "coding": "7"
                          }
                        ],
                        "name": "ObjAmb_fem"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "\u003Cp\u003EWenn du nur an die \u003Cstrong\u003Emaskulinen\u003C\u002Fstrong\u003E Aspekte des Roboters denkst und die femininen ignorierst, \u003Cstrong\u003Ewie maskulin nimmst du diesen Roboter wahr\u003C\u002Fstrong\u003E? \u003C\u002Fp\u003E",
                        "options": [
                          {
                            "label": "Gar nicht maskulin",
                            "coding": "1"
                          },
                          {
                            "label": "Nicht maskulin",
                            "coding": "2"
                          },
                          {
                            "label": "Eher nicht maskulin",
                            "coding": "3"
                          },
                          {
                            "label": "Neutral",
                            "coding": "4"
                          },
                          {
                            "label": "Eher maskulin",
                            "coding": "5"
                          },
                          {
                            "label": "Maskulin",
                            "coding": "6"
                          },
                          {
                            "label": "Völlig maskulin",
                            "coding": "7"
                          }
                        ],
                        "name": "ObjAmb_mask"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "\u003Cp\u003EIn wie weit hast du \u003Cstrong\u003Egemischte Gedanken und Gefühle\u003C\u002Fstrong\u003E zum Geschlecht des Roboters?\u003C\u002Fp\u003E",
                        "options": [
                          {
                            "label": "Überhaupt keine gemischten Gedanken und Gefühle",
                            "coding": "1"
                          },
                          {
                            "label": "Keine gemischten Gedanken und Gefühle",
                            "coding": "2"
                          },
                          {
                            "label": "Eher keine gemischten Gedanken und Gefühle",
                            "coding": "3"
                          },
                          {
                            "label": "Neutral",
                            "coding": "4"
                          },
                          {
                            "label": "Eher gemischte Gedanken und Gefühle",
                            "coding": "5"
                          },
                          {
                            "label": "Gemischte Gedanken und Gefühle",
                            "coding": "6"
                          },
                          {
                            "label": "Völlig gemischte Gedanken und Gefühle",
                            "coding": "7"
                          }
                        ],
                        "name": "SubjAmb"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "\u003Cp\u003EWie \u003Cstrong\u003Esicher\u003C\u002Fstrong\u003E bist du dir mit deiner Beurteilung?\u003C\u002Fp\u003E",
                        "options": [
                          {
                            "label": "Sehr sicher",
                            "coding": "1"
                          },
                          {
                            "label": "Sicher ",
                            "coding": "2"
                          },
                          {
                            "label": "Unsicher",
                            "coding": "3"
                          }
                        ],
                        "name": "ambiguity"
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Weiter →",
                    "submitButtonPosition": "right",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "SR_restlicheItems"
                  }
                ]
              }
            }
          ]
        },
        {
          "title": "MT",
          "type": "lab.flow.Sequence",
          "parameters": {},
          "plugins": [],
          "metadata": {
            "title": "",
            "description": "",
            "repository": "",
            "contributors": ""
          },
          "files": {},
          "responses": {},
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "",
                  "content": "In dieser Studie zeigen wir dir verschiedene Roboter Bilder. Wir bitten dich zu diesen Bildern Entscheidungen zu treffen.\u003Cbr\u003E\nAuf dem Bildschirm wirst Du gleich ein Bild sehen. In den oberen Ecken befinden sich die Antwortkategorien \u003Cstrong\u003E‘maskulin‘ und ‘feminin‘\u003C\u002Fstrong\u003E. Du sollst dich für eine Antwortkategorie entscheiden, indem Du auf eine der beiden Antwortschaltflächen am oberen Rand des Bildschirms klickst. \u003Cbr\u003E\nWir zeichnen die Geschwindigkeit und Genauigkeit deiner Antworten auf, daher antworte bitte so \u003Cstrong\u003Eschnell\u003C\u002Fstrong\u003E (innerhalb von 5 Sekunden) und so genau wie möglich, auch wenn einige Bilder für dich schwer zu kategorisieren sein mögen. Um deine Antwort zu beschleunigen, solltest Du den \u003Cstrong\u003ECursor sofort nach der Anzeige des Bildes bewegen\u003C\u002Fstrong\u003E (innerhalb von 1\u002F2 Sekunden), auch wenn Du dich noch nicht vollständig für eine Antwort entschieden hast. Es ist jedoch gleichzeitig wichtig, dass Du den Cursor erst dann zu bewegen beginnst, wenn ein neues Bild auf dem Bildschirm erscheint. \u003Cstrong\u003EBewege deine Maus also nicht, während Du auf die Anzeige des nächsten Bildes wartest.\u003C\u002Fstrong\u003E\u003Cbr\u003E\nWir beginnen mit einer Reihe von 5 Übungsbildern, um dich mit der Aufgabe vertraut zu machen.  Sollte deine Reaktion in diesen Übungsdurchläufen zu langsam sein, erscheint eine Meldung, die dich darauf hinweist, dass Du versuchen solltest, die Maus früher zu bewegen. Nach der Übung gehst Du automatisch zur eigentlichen Studie über.\n"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Weiter",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Mouse-Tracking Instruktion"
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "left_label": "Feminin",
                  "right_label": "Maskulin",
                  "side_condition": "fem_left"
                },
                {
                  "left_label": "Maskulin",
                  "right_label": "Feminin",
                  "side_condition": "mask_left"
                }
              ],
              "sample": {
                "mode": "draw",
                "n": "1"
              },
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Randomize_MT_side",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Sequence",
                "content": [
                  {
                    "type": "lab.flow.Sequence",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Randomize-MT_practice_pics",
                    "content": [
                      {
                        "type": "lab.flow.Loop",
                        "templateParameters": [
                          {
                            "picture_practice_MT": "793.jpg",
                            "": ""
                          },
                          {
                            "picture_practice_MT": "614.jpg",
                            "": ""
                          },
                          {
                            "picture_practice_MT": "743.jpg",
                            "": ""
                          },
                          {
                            "picture_practice_MT": "651.jpg",
                            "": ""
                          },
                          {
                            "picture_practice_MT": "414.jpg",
                            "": ""
                          }
                        ],
                        "sample": {
                          "mode": "draw-shuffle"
                        },
                        "files": {
                          "793.jpg": "embedded\u002Fda6eecbe246a9f78d72903ea66d958408a773bc26372e4b64c6a809460d8c354.jpg",
                          "614.jpg": "embedded\u002F0af10617242c3f0b0c3c9902cbfa32029760a685561a44714399896dbda57260.jpg",
                          "743.jpg": "embedded\u002Ff2c9b570ca6a55f34797d5c329074872ba2fe7eba659488e2dcec639776a0579.jpg",
                          "651.jpg": "embedded\u002Fd71e98fc9e8a1bb5da0f08c5efe40eb08ea35d3c2d59db86086996a51570a5c4.jpg",
                          "414.jpg": "embedded\u002Fa08fe7bd97ea1ccce5ca90b7ec9b8142817871d92b9f9d20529c2aecf448fee2.jpg"
                        },
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "Mousetracking_practice_pics_loop",
                        "plugins": [],
                        "shuffleGroups": [],
                        "template": {
                          "type": "lab.flow.Sequence",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "Trial",
                          "content": [
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "aoi",
                                  "left": 0,
                                  "top": 125,
                                  "angle": 0,
                                  "width": 17.32,
                                  "height": 18.86,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "rgba(0, 0, 0, 0.2)",
                                  "label": "Next"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": 88,
                                  "angle": 0,
                                  "width": 91.88,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "Weiter",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "circle",
                                  "left": 0,
                                  "top": 125,
                                  "angle": 0,
                                  "width": 18.33,
                                  "height": 18.33,
                                  "stroke": "#000000",
                                  "strokeWidth": 1,
                                  "fill": "#ffffff"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "click(0) @Next": "Next"
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "Screen"
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "rect",
                                  "left": -289,
                                  "top": -260.83,
                                  "angle": 0,
                                  "width": 205.54,
                                  "height": 72.74,
                                  "stroke": "#000000",
                                  "strokeWidth": 1,
                                  "fill": "#ffffff"
                                },
                                {
                                  "type": "rect",
                                  "left": 289,
                                  "top": -260.83,
                                  "angle": 0,
                                  "width": 204.98,
                                  "height": 73.9,
                                  "stroke": "#000000",
                                  "strokeWidth": 1,
                                  "fill": "#ffffff"
                                },
                                {
                                  "type": "i-text",
                                  "left": -275,
                                  "top": -264,
                                  "angle": 0,
                                  "width": 414.47,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "${ this.parameters.left_label }",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 289,
                                  "top": -262,
                                  "angle": 0,
                                  "width": 434.03,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "${ this.parameters.right_label }",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "aoi",
                                  "left": -288,
                                  "top": -261,
                                  "angle": 0,
                                  "width": 208.88,
                                  "height": 76.09,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "rgba(0, 0, 0, 0.2)",
                                  "label": "left"
                                },
                                {
                                  "type": "aoi",
                                  "left": 289,
                                  "top": -261,
                                  "angle": 0,
                                  "width": 208.27,
                                  "height": 77.89,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "rgba(0, 0, 0, 0.2)",
                                  "label": "right"
                                },
                                {
                                  "type": "image",
                                  "left": 13.02,
                                  "top": 36,
                                  "angle": 0,
                                  "width": 197.64000000000001,
                                  "height": 196.56,
                                  "stroke": null,
                                  "strokeWidth": 0,
                                  "fill": "black",
                                  "src": "${ this.files[this.parameters.picture_practice_MT ]}",
                                  "autoScale": "height"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {
                                "3AI_fietta_voiceAssistant_KI.jpg": "embedded\u002F4a670cfc7a9e5060bd28ad485ce59c807b978eef9d7b1c697aab796b38a282fe.jpg",
                                "4AI_fietta_selfdrivingCar_KI.jpg": "embedded\u002F8f826a659d8c2aa37588d3a60e37787bb69572298cb374e6fb18bd2dd3f29f2a.jpg",
                                "5AI_fietta_PizzaDrohne_KI.jpg": "embedded\u002Fed94a019ed9e92fe215ee2fbc37e31496ff5432238ab4f963366154f2915deab.jpg",
                                "399_Erdbeere__Univalent_Pos.jpg": "embedded\u002F87ce8c060e21aa69dd606aa1d3496cc883342a687f9153ec028bac70f4e46115.jpg",
                                "648_Blume_Univalent_Pos.jpg": "embedded\u002F0f10fe0196a8f0247e21d7180d3c23bad6b513be5dba3378a83a6853fd12c85b.jpg",
                                "685_Handfeger_neutral.jpg": "embedded\u002F875952af9d299a49135cacf428743b301217677708d07d04b0a2ac98f43eb868.jpg",
                                "734_Kleberolle_Neutral.jpg": "embedded\u002Fe7413febc7f17dabcdf67a88de1306ae295448bfc66871270dda16b678f810e1.jpg",
                                "744_Hocker_neutral.jpg": "embedded\u002F02c0fba72a5a6cfc69960fdfceebbcea6213795b3cfd18ea4e2ed61e499d20ae.jpg",
                                "752_Aschenbecher_Univalent_Neg.jpg": "embedded\u002F16d16662b7df54a2b4e0a67ecf09aa71db481b02366684e734b604e22200dc07.jpg",
                                "chatgpt_KI.png": "embedded\u002F82ffadaa7c1765d46f1d32220f01f675afb05ebe77a8a6397c56062268894dab.png",
                                "IAPS_tasse_nobackground_Neutral.png": "embedded\u002F86774647b96a7b3f42d9a7747e29143820edbc6b6dea5b4ceeb247fb392eee26.png",
                                "käfer_Univalent_Neg.jpg": "embedded\u002F4bb12f305c53f64274af0f6bd019cbd508270d2acec784923c1d4ee804632ca9.jpg"
                              },
                              "responses": {
                                "click @left": "${ this.parameters.left_label }",
                                "click @right": "${ this.parameters.right_label }",
                                "undefined": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "Mousetracking",
                              "plugins": [
                                {
                                  "type": "mousetrap",
                                  "mode": "mousetrap",
                                  "path": "global.MousetrapPlugin"
                                }
                              ]
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 660.47,
                                  "height": 93.79,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "\n\n${this.state.duration \u003C 5000 ? '' :  'Bitte schneller antworten'}",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "25",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": 100,
                                  "angle": 0,
                                  "width": 6.95,
                                  "height": 126.56,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "\n\n\n ",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "25",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "Feedback",
                              "tardy": true,
                              "timeout": "700"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    "type": "lab.flow.Sequence",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Randomize-MT_Pics_Robots",
                    "shuffle": true,
                    "content": [
                      {
                        "type": "lab.flow.Loop",
                        "templateParameters": [
                          {
                            "pictures_MT": "Aila_small.jpg"
                          },
                          {
                            "pictures_MT": "Albert-hubo_small.jpg"
                          },
                          {
                            "pictures_MT": "Buddy_small.jpg"
                          },
                          {
                            "pictures_MT": "Cosero_small.jpg"
                          },
                          {
                            "pictures_MT": "Emys_small.jpg"
                          },
                          {
                            "pictures_MT": "Erica_small.jpg"
                          },
                          {
                            "pictures_MT": "Furo_small.jpg"
                          },
                          {
                            "pictures_MT": "Gazeroid_small.jpg"
                          },
                          {
                            "pictures_MT": "Gemini_small.jpg"
                          },
                          {
                            "pictures_MT": "Geminoid-H1-4_small.jpg"
                          },
                          {
                            "pictures_MT": "Han_small.jpg"
                          },
                          {
                            "pictures_MT": "Inmoov_small.jpg"
                          },
                          {
                            "pictures_MT": "Ipal_small.jpg"
                          },
                          {
                            "pictures_MT": "Jia jia_small.jpg"
                          },
                          {
                            "pictures_MT": "Kirobo_small.jpg"
                          },
                          {
                            "pictures_MT": "Kobian_small.jpg"
                          },
                          {
                            "pictures_MT": "Kodomoroid_small.jpg"
                          },
                          {
                            "pictures_MT": "Mertz_small.jpg"
                          },
                          {
                            "pictures_MT": "Nadine_small.jpg"
                          },
                          {
                            "pictures_MT": "Nao_small.jpg"
                          },
                          {
                            "pictures_MT": "Otonaroid_small.jpg"
                          },
                          {
                            "pictures_MT": "Reem_small.jpg"
                          },
                          {
                            "pictures_MT": "Robina_small.jpg"
                          },
                          {
                            "pictures_MT": "Sanbot_max_small.jpg"
                          },
                          {
                            "pictures_MT": "Seer_small.jpg"
                          },
                          {
                            "pictures_MT": "SociBot-mini_small.jpg"
                          },
                          {
                            "pictures_MT": "Topio_small.jpg"
                          },
                          {
                            "pictures_MT": "Topio-Dio_small.jpg"
                          },
                          {
                            "pictures_MT": "Waseda_small.jpg"
                          },
                          {
                            "pictures_MT": "Zeno_small.jpg"
                          }
                        ],
                        "sample": {
                          "mode": "draw-shuffle"
                        },
                        "files": {
                          "Aila_small.jpg": "embedded\u002Fd2edea3b6505f052f82123ba20de471bc95fa7324060294cebc156c77f786237.jpg",
                          "Albert-hubo_small.jpg": "embedded\u002F3874c1057ec758e8ae780bd90abaa7523c46637e8a5829bfceb203cfd325650c.jpg",
                          "Amigo_small.jpg": "embedded\u002F56d56839d98903f78ac181a449cdeb5fcb56bf178bc37a44f9a42d9137b24231.jpg",
                          "Buddy_small.jpg": "embedded\u002F102c17d66b2ebf99b14aaaead716aae6adad75a1bc80086ae1904f02be499837.jpg",
                          "Cosero_small.jpg": "embedded\u002Fa93159ac1aac96d2d5e3d288d720dfd084d55f928169267fde5f76804227fe8f.jpg",
                          "Discorobo_small.jpg": "embedded\u002Fed2c6d4f627acbfd7820a79b53972f57f320f73c84954e2fafa3a09ae873d5e3.jpg",
                          "DURUS_small.jpg": "embedded\u002F18c43d8936a55398a2389a8128aaf775baaa055d53d6f520f453f81f561c21ee.jpg",
                          "Emiew_small.jpg": "embedded\u002F33c1bfee2cee710f8956380e190509dc8301b57d1dee00c06edfefbad6b25889.jpg",
                          "Emys_small.jpg": "embedded\u002Fe573ac38196921790515731eb0280090408233cb8a3b274a6b662c673966c250.jpg",
                          "Erica_small.jpg": "embedded\u002F1411817ee938bf850cd112387b7b46e092f71db90a0e8b5dbce9fdd75f2d9770.jpg",
                          "Flash_small.jpg": "embedded\u002F18d1ba77b1b5ef68bf1cf66ed0afff1f8aa531f3b4a63604c0762f16f3289ed9.jpg",
                          "Flobi_small.jpg": "embedded\u002F9741056a5108d15ead9d91c9b0ebdda22eddd361301bb571c152d8af5b37cdc4.jpg",
                          "Furo_small.jpg": "embedded\u002Fd132c186422fa8c1a7ddd71d0ddb97bca4f79e632c7c694d2cb59046e492f659.jpg",
                          "Gazeroid_small.jpg": "embedded\u002F305ac01de57e2bae9ce7ecfc433717d19b789641433c6c6e4848cb3fd37ed6ae.jpg",
                          "Gemini_small.jpg": "embedded\u002F21f109e4798d917daffa5de2633ed4e973fa41a22a14ee2c53df7597eb21e1c3.jpg",
                          "Geminoid-H1-4_small.jpg": "embedded\u002F4197176901f6afeb18c5a9dc73d74a4fce812639eeefdc324709ce5bba29ff46.jpg",
                          "Han_small.jpg": "embedded\u002F59a053b9a5e9cf582d803537a3fdee87d2e780401c7d4702bfc09436bad777ea.jpg",
                          "Inmoov_small.jpg": "embedded\u002F81095c3e8d81f2ae5c8156d500863b83f9c10adadc7b808247ede95c379da5d5.jpg",
                          "Ipal_small.jpg": "embedded\u002Fd71a1b6aa7a34fee4d33125c249e4add99fea0bcc1055610985253df6adef95c.jpg",
                          "Jia jia_small.jpg": "embedded\u002F5b077145a93bad4f14b4f32e6f80fe3831646f20d22b92848b2ce6a426d1dc01.jpg",
                          "Kirobo_small.jpg": "embedded\u002F96b747884b5a4856c21b7d6cbb981f7f77f890df55d7284f5d7cfe6d6c1bc9dc.jpg",
                          "Kobian_small.jpg": "embedded\u002F3687fba4ce487eb128547c99af15275e32c55a373cd12fc767f55ac7e5da22b5.jpg",
                          "Kodomoroid_small.jpg": "embedded\u002F9aad6c2eceaf442b8b6c7a3b1bc3ea65cb6309fa59813dcb3600d4d1499015a1.jpg",
                          "Mertz_small.jpg": "embedded\u002F4e8d7d2b2b8ddb091776e54ba9168506664749eefd88c95fa16525e4729361f7.jpg",
                          "Millennia_small.jpg": "embedded\u002Fabc52e642f718152a9279ee63ed2e05ea7eaf147eaa797c4d7ca9f8a0360ecc8.jpg",
                          "MiRAE_small.jpg": "embedded\u002F4f709779f97c4007415c295a13f6ec612022fb38b353bd5d96509436363a297a.jpg",
                          "Nadine_small.jpg": "embedded\u002Fd370c6365bea2c49f621d9bfaea6c599965058131409c370984257cb54956ed1.jpg",
                          "Nao_small.jpg": "embedded\u002F1d4aae7a54147b77ff26409f0117c40dfe2c778df6a90d06dcb22f192b14d04a.jpg",
                          "Otonaroid_small.jpg": "embedded\u002F78bab18eab5c20c03bbc192bd08e12253774e9082e22cc127f80cdf3fc1f67f2.jpg",
                          "Otto_small.jpg": "embedded\u002Fbaf0ab21aa8147cae343550fee58fc55b331be3327da68c535b199e96ab453e9.jpg",
                          "Pepper_small.jpg": "embedded\u002F503a64673316d752e03ca8c35b7461bffe6a5e2fffff443a77eef84aef5462aa.jpg",
                          "Personal-Robot_small.jpg": "embedded\u002Ff36359dc2c47f2a9da57b70e00beedc59c8850b6f4dc3ac2c935d2843c81f11d.jpg",
                          "R3-1_small.jpg": "embedded\u002F8a79690689139d18d8d508a1201a3ea73d1100d360f9af93be414eed596fca70.jpg",
                          "Reem_small.jpg": "embedded\u002F2116d180510a52d6eec27bfc3bf65b9fb12f6a1c6c77c8c1682e36699007b769.jpg",
                          "Robina_small.jpg": "embedded\u002F8615aaefb01615a9e37f5caa174d53f3e267b60f141dde104ca5c3e2fcd83078.jpg",
                          "Romeo_small.jpg": "embedded\u002Fcce8bae7d4c3e9be45818445964fe408f32f6e328f821fbfbbe78354c42f7cae.jpg",
                          "Sanbot_max_small.jpg": "embedded\u002F240351dfcd14d309f164a3f0af0b202d331d992f65163a8232dd77d6697078f8.jpg",
                          "Sanbot_nano_small.jpg": "embedded\u002F7453463d244063326c334feb3f1408307c0cfe109e1c22b1fe075579dfd3e784.jpg",
                          "Seer_small.jpg": "embedded\u002F3a493eec942d3f1a731bf58502d3b5d31dc12d15c4904c22559dc45c2403e0f0.jpg",
                          "Slate_small.jpg": "embedded\u002Fc7f37c40f9b5284785a4c2ed6cf1e0d00eba63ea10cb4f175e5db5b1b839a34c.jpg",
                          "SociBot-mini_small.jpg": "embedded\u002F3afee33750ff4b3fba17d8373ce35977fc0aa1929586ed95dabd264fd1ad837e.jpg",
                          "Sophia_small.jpg": "embedded\u002F11b84a77f4a3b2d26ec1de198b96e36705dfd193e67c3cf5078e581f7d4e2605.jpg",
                          "Speech_buddy_small.jpg": "embedded\u002Fa49d2d04b890c557c3f041ed494a5a50e641a2d1c198d355a1367ef3acf275fd.jpg",
                          "Thr3_small.jpg": "embedded\u002Fe82abecd89d223875c99b4e36486312def649bb30ff1f0dae6c0b30f14fb7a59.jpg",
                          "Topio_small.jpg": "embedded\u002F12b2f44fd42201043ff18e6b5a19baf7e72009ac9ed9916dd76bbb285980d24b.jpg",
                          "Topio-Dio_small.jpg": "embedded\u002F830d367c3187eb58fd4469566e579f6c4fe922c5493be3489676e8b5c37395ce.jpg",
                          "Walker_small.jpg": "embedded\u002F45dbdb3865521ca9b2fbcfb1cb278beec86439aff42fddfe2e8359650e52b931.jpg",
                          "Waseda_small.jpg": "embedded\u002Ff0e645713f49d18661d073d0b04be317c3b17dcafcd648b83c6fb65d65b13f9c.jpg",
                          "Zeno_small.jpg": "embedded\u002Fa9c84a41e2114b30fddccbea1afd8c2e5f0e38d0fbd4c5cafdf0241746849808.jpg"
                        },
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "Mousetracking_pics-loop",
                        "plugins": [],
                        "shuffleGroups": [],
                        "template": {
                          "type": "lab.flow.Sequence",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "Trial",
                          "content": [
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "aoi",
                                  "left": 0,
                                  "top": 125,
                                  "angle": 0,
                                  "width": 17.32,
                                  "height": 18.86,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "rgba(0, 0, 0, 0.2)",
                                  "label": "Next"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": 88,
                                  "angle": 0,
                                  "width": 91.88,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "Weiter",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "circle",
                                  "left": 0,
                                  "top": 125,
                                  "angle": 0,
                                  "width": 18.33,
                                  "height": 18.33,
                                  "stroke": "#000000",
                                  "strokeWidth": 1,
                                  "fill": "#ffffff"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "click(0) @Next": "Next"
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "Screen"
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "rect",
                                  "left": -289,
                                  "top": -260.83,
                                  "angle": 0,
                                  "width": 205.54,
                                  "height": 72.74,
                                  "stroke": "#000000",
                                  "strokeWidth": 1,
                                  "fill": "#ffffff"
                                },
                                {
                                  "type": "rect",
                                  "left": 289,
                                  "top": -260.83,
                                  "angle": 0,
                                  "width": 204.98,
                                  "height": 73.9,
                                  "stroke": "#000000",
                                  "strokeWidth": 1,
                                  "fill": "#ffffff"
                                },
                                {
                                  "type": "i-text",
                                  "left": -289,
                                  "top": -263,
                                  "angle": 0,
                                  "width": 414.47,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "${ this.parameters.left_label }",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 289,
                                  "top": -263,
                                  "angle": 0,
                                  "width": 434.03,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "${ this.parameters.right_label }",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "aoi",
                                  "left": -286,
                                  "top": -262.95,
                                  "angle": 0,
                                  "width": 208.88,
                                  "height": 76.09,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "rgba(0, 0, 0, 0.2)",
                                  "label": "left"
                                },
                                {
                                  "type": "aoi",
                                  "left": 287,
                                  "top": -260,
                                  "angle": 0,
                                  "width": 208.27,
                                  "height": 77.89,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "rgba(0, 0, 0, 0.2)",
                                  "label": "right"
                                },
                                {
                                  "type": "image",
                                  "left": 13.02,
                                  "top": 35,
                                  "angle": 0,
                                  "width": 197.64000000000001,
                                  "height": 196.56,
                                  "stroke": null,
                                  "strokeWidth": 0,
                                  "fill": "black",
                                  "src": "${ this.files[this.parameters.pictures_MT ]}",
                                  "autoScale": "height"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {
                                "3AI_fietta_voiceAssistant_KI.jpg": "embedded\u002F4a670cfc7a9e5060bd28ad485ce59c807b978eef9d7b1c697aab796b38a282fe.jpg",
                                "4AI_fietta_selfdrivingCar_KI.jpg": "embedded\u002F8f826a659d8c2aa37588d3a60e37787bb69572298cb374e6fb18bd2dd3f29f2a.jpg",
                                "5AI_fietta_PizzaDrohne_KI.jpg": "embedded\u002Fed94a019ed9e92fe215ee2fbc37e31496ff5432238ab4f963366154f2915deab.jpg",
                                "399_Erdbeere__Univalent_Pos.jpg": "embedded\u002F87ce8c060e21aa69dd606aa1d3496cc883342a687f9153ec028bac70f4e46115.jpg",
                                "648_Blume_Univalent_Pos.jpg": "embedded\u002F0f10fe0196a8f0247e21d7180d3c23bad6b513be5dba3378a83a6853fd12c85b.jpg",
                                "685_Handfeger_neutral.jpg": "embedded\u002F875952af9d299a49135cacf428743b301217677708d07d04b0a2ac98f43eb868.jpg",
                                "734_Kleberolle_Neutral.jpg": "embedded\u002Fe7413febc7f17dabcdf67a88de1306ae295448bfc66871270dda16b678f810e1.jpg",
                                "744_Hocker_neutral.jpg": "embedded\u002F02c0fba72a5a6cfc69960fdfceebbcea6213795b3cfd18ea4e2ed61e499d20ae.jpg",
                                "752_Aschenbecher_Univalent_Neg.jpg": "embedded\u002F16d16662b7df54a2b4e0a67ecf09aa71db481b02366684e734b604e22200dc07.jpg",
                                "chatgpt_KI.png": "embedded\u002F82ffadaa7c1765d46f1d32220f01f675afb05ebe77a8a6397c56062268894dab.png",
                                "IAPS_tasse_nobackground_Neutral.png": "embedded\u002F86774647b96a7b3f42d9a7747e29143820edbc6b6dea5b4ceeb247fb392eee26.png",
                                "käfer_Univalent_Neg.jpg": "embedded\u002F4bb12f305c53f64274af0f6bd019cbd508270d2acec784923c1d4ee804632ca9.jpg"
                              },
                              "responses": {
                                "click @left": "${ this.parameters.left_label }",
                                "click @right": "${ this.parameters.right_label }",
                                "undefined": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "Mousetracking",
                              "plugins": [
                                {
                                  "type": "mousetrap",
                                  "mode": "mousetrap",
                                  "path": "global.MousetrapPlugin"
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  ]
})

// Let's go!
study.run()