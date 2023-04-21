window.netflix = window.netflix || {};
netflix.reactContext = {
  title: "Netflix",
  models: {
    esnGeneratorModel: {
      data: {
        esn: "NFCDCH-MC-K42JZ3GFD7976GXP17NLFHT5DNA7EM",
        useFallbackEsn: false,
        fallbackEsn: "WWW-BROWSE-",
      },
      type: "Model",
    },
    abContext: {
      data: {
        headers: {
          "X-Netflix.uiVersion": "vd906c3ed",
          "X-Netflix.esnPrefix": "NFCDCH-MC-",
          "X-Netflix.browserName": "Chrome",
          "X-Netflix.browserVersion": 112,
          "X-Netflix.osName": "Mac\x20OS\x20X",
          "X-Netflix.osFullName": "Mac\x20OS\x20X",
          "X-Netflix.osVersion": "10.15.7",
          "X-Netflix.clientType": "akira",
        },
      },
    },
    nonmemberSupportCategories: {
      data: {
        category: "innovation",
        isLegacyClient: false,
        isStaticClient: false,
      },
      type: "Model",
    },
    serverDefs: {
      data: {
        env: "prod",
        stack: "prod",
        cluster: "nq_website_core-prod-release",
        instance: "6b6f7cad-a789-4e9f-be5d-acd243b06ac1",
        EC2_REGION: "us-west-2",
        BUILD_IDENTIFIER: "vd906c3ed",
        uiVersion: "shakti-vd906c3ed",
        host: "www.netflix.com",
        requestId: "4cb18491-cbae-4353-8a83-270436757bd7-175950277",
        AUI_ENDPOINT_STACK: null,
        API_ROOT: "https:\x2F\x2Fwww.netflix.com\x2Fapi",
        DVD_CO: "https:\x2F\x2Fdvd.netflix.com\x2F",
        debugApiRequests: false,
        ftlHost: "",
        ftlRecoveryHTTPStatus: [0, 408, 414, 502, 504],
        enableABInclusionHeaders: true,
        acceptHeaders:
          "text\x2Fhtml,application\x2Fxhtml\x2Bxml,application\x2Fxml\x3Bq\x3D0.9,image\x2Favif,image\x2Fwebp,image\x2Fapng,\x2A\x2F\x2A\x3Bq\x3D0.8,application\x2Fsigned-exchange\x3Bv\x3Db3\x3Bq\x3D0.7",
        requestIpAddress: "76.126.243.201,2600:1f14:62a:de81::346d",
      },
      type: "Model",
    },
    requestHeaders: {
      data: {
        accept:
          "text\x2Fhtml,application\x2Fxhtml\x2Bxml,application\x2Fxml\x3Bq\x3D0.9,image\x2Favif,image\x2Fwebp,image\x2Fapng,\x2A\x2F\x2A\x3Bq\x3D0.8,application\x2Fsigned-exchange\x3Bv\x3Db3\x3Bq\x3D0.7",
        xForwardedFor: "76.126.243.201,2600:1f14:62a:de81::346d",
      },
      type: "Model",
    },
    browserInfo: {
      data: {
        name: "Chrome",
        version: "112.0.0.0",
        major: 112,
        minor: 0,
        patch: 0,
        os: {
          name: "Mac\x20OS\x20X",
          fullName: "Mac\x20OS\x20X",
          version: "10.15.7",
          majorVersion: 10,
          minorVersion: 15,
          patchVersion: 7,
        },
        device: { family: "Other" },
        isFirefox: false,
        isSafari: false,
        isIE: false,
        isEdge: false,
        isChrome: true,
        isTesla: false,
        isOpera: false,
        isEdgeOSS: false,
        isWindows: false,
        isMac: true,
        isChromeOS: false,
        isLinux: false,
        isAndroid: false,
        isIOS: false,
        isIOSGT91: false,
        isWindowsPhone: false,
        isMobile: false,
        isAndroidPhone: false,
        isWindowsVista: false,
        isWindowsXP: false,
        isWindows7: false,
        isWindows8: false,
        isWindows10: false,
        originallyIdentifiedAsAppleMail: false,
        features: {
          avif: true,
          webp: true,
          es2015: true,
          fontDisplayProperty: true,
          supportsGames: true,
          drmSystem: "widevine",
          maybeSupportsHTML5: true,
          maybeSupportsHTML5withDRM: true,
          maybeSupportsSL: false,
        },
        specialFlags: {},
        esnPrefix: "NFCDCH-MC-",
        _rawResult: {
          family: "Chrome",
          major: "112",
          minor: "0",
          patch: "0",
          device: { family: "Other", major: "0", minor: "0", patch: "0" },
          os: {
            family: "Mac\x20OS\x20X",
            major: "10",
            minor: "15",
            patch: "7",
          },
        },
      },
      type: "Model",
    },
    links: {
      data: {
        WIHOMEURL: "\x2FWiHome",
        TERMS: "https:\x2F\x2Fhelp.netflix.com\x2Flegal\x2Ftermsofuse",
        PRIVACY: "https:\x2F\x2Fhelp.netflix.com\x2Flegal\x2Fprivacy",
      },
      type: "Model",
    },
    uiTracking: {
      data: {
        mapRequestId: "",
        enabled: true,
        retrySend: true,
        maxRecords: 250,
        useCompression: true,
        ptdebug: false,
      },
      type: "Model",
    },
    memberContext: {
      data: {
        type: "memberContext",
        geo: {
          locale: {
            default: true,
            dir: "ltr",
            displayName: "English\x20\x28Norway\x29",
            fallbackDisplayName: "English",
            id: "en-NO",
            language: "en",
            isCursive: false,
            doubleByte: false,
            hasExtendedDiacritics: false,
            durationFormat: "hoursAndMinutes",
            fallbacks: ["en-GB", "en"],
          },
          preferredLocale: {
            country: "US",
            language: "en",
            dir: "ltr",
            isCursive: false,
            doubleByte: false,
            hasExtendedDiacritics: false,
            default: true,
            id: "en-NO",
          },
          supportedLocales: [
            {
              locale: "en-US",
              selected: false,
              default: true,
              country: "US",
              id: "en",
              displayText: "English",
            },
            {
              locale: "es-US",
              selected: false,
              default: false,
              country: "US",
              id: "es",
              displayText: "Espa\u00F1ol",
            },
            {
              locale: "pt-US",
              selected: false,
              default: false,
              country: "US",
              id: "pt",
              displayText: "Portugu\u00EAs",
            },
            {
              locale: "fr-US",
              selected: false,
              default: false,
              country: "US",
              id: "fr",
              displayText: "Fran\u00E7ais",
            },
            {
              locale: "sv-US",
              selected: false,
              default: false,
              country: "US",
              id: "sv",
              displayText: "Svenska",
            },
            {
              locale: "nb-US",
              selected: false,
              default: false,
              country: "US",
              id: "nb",
              displayText: "Norsk\x20bokm\u00E5l",
            },
            {
              locale: "fi-US",
              selected: false,
              default: false,
              country: "US",
              id: "fi",
              displayText: "Suomi",
            },
            {
              locale: "da-US",
              selected: false,
              default: false,
              country: "US",
              id: "da",
              displayText: "Dansk",
            },
            {
              locale: "nl-US",
              selected: false,
              default: false,
              country: "US",
              id: "nl",
              displayText: "Nederlands",
            },
            {
              locale: "de-US",
              selected: false,
              default: false,
              country: "US",
              id: "de",
              displayText: "Deutsch",
            },
            {
              locale: "ja-US",
              selected: false,
              default: false,
              country: "US",
              id: "ja",
              displayText: "\u65E5\u672C\u8A9E",
            },
            {
              locale: "it-US",
              selected: false,
              default: false,
              country: "US",
              id: "it",
              displayText: "Italiano",
            },
            {
              locale: "zh-US",
              selected: false,
              default: false,
              country: "US",
              id: "zh",
              displayText: "\u4E2D\u6587",
            },
            {
              locale: "ko-US",
              selected: false,
              default: false,
              country: "US",
              id: "ko",
              displayText: "\uD55C\uAD6D\uC5B4",
            },
            {
              locale: "ar-US",
              selected: false,
              default: false,
              country: "US",
              id: "ar",
              displayText: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
            },
            {
              locale: "pl-US",
              selected: false,
              default: false,
              country: "US",
              id: "pl",
              displayText: "Polski",
            },
            {
              locale: "tr-US",
              selected: false,
              default: false,
              country: "US",
              id: "tr",
              displayText: "T\u00FCrk\u00E7e",
            },
            {
              locale: "th-US",
              selected: false,
              default: false,
              country: "US",
              id: "th",
              displayText: "\u0E44\u0E17\u0E22",
            },
            {
              locale: "ro-US",
              selected: false,
              default: false,
              country: "US",
              id: "ro",
              displayText: "Rom\u00E2n\u0103",
            },
            {
              locale: "he-US",
              selected: false,
              default: false,
              country: "US",
              id: "he",
              displayText: "\u05E2\u05D1\u05E8\u05D9\u05EA",
            },
            {
              locale: "el-US",
              selected: false,
              default: false,
              country: "US",
              id: "el",
              displayText: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",
            },
            {
              locale: "id-US",
              selected: false,
              default: false,
              country: "US",
              id: "id",
              displayText: "Bahasa\x20Indonesia",
            },
            {
              locale: "hu-US",
              selected: false,
              default: false,
              country: "US",
              id: "hu",
              displayText: "Magyar",
            },
            {
              locale: "cs-US",
              selected: false,
              default: false,
              country: "US",
              id: "cs",
              displayText: "\u010Ce\u0161tina",
            },
            {
              locale: "vi-US",
              selected: false,
              default: false,
              country: "US",
              id: "vi",
              displayText: "Ti\u1EBFng\x20Vi\u1EC7t",
            },
            {
              locale: "hi-US",
              selected: false,
              default: false,
              country: "US",
              id: "hi",
              displayText: "\u0939\u093F\u0928\u094D\u0926\u0940",
            },
            {
              locale: "ms-US",
              selected: false,
              default: false,
              country: "US",
              id: "ms",
              displayText: "Bahasa\x20Melayu",
            },
            {
              locale: "ru-US",
              selected: false,
              default: false,
              country: "US",
              id: "ru",
              displayText: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
            },
            {
              locale: "hr-US",
              selected: false,
              default: false,
              country: "US",
              id: "hr",
              displayText: "Hrvatski",
            },
            {
              locale: "uk-US",
              selected: false,
              default: false,
              country: "US",
              id: "uk",
              displayText:
                "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
            },
            {
              locale: "fil-US",
              selected: false,
              default: false,
              country: "US",
              id: "fil",
              displayText: "Filipino",
            },
          ],
          supportedCountry: "ALLOW",
          requestCountry: {
            id: "US",
            countryName: "United\x20States",
            supportedLocales: ["en", "es"],
            defaultLocale: "en",
            status: "ALLOW",
            regionCode: "CA",
          },
          showPreTaxDisclaimer: false,
          showAltTermsOfUse: false,
          showLegalContactsLink: false,
          showIntlTerms: false,
          shouldReverseNameFields: false,
        },
        testAllocations: [
          { testId: 6856, cellId: 5, explicit: true },
          { testId: 3210, cellId: 1, explicit: true },
          { testId: 2143, cellId: 1, explicit: true },
        ],
        user: "user:\x20GA3BHZYFHZBSTBB7VDOZA5IKCM",
        userInfo: {
          name: "Janvi",
          guid: "NLIPC7NYCJD5FPWK4DU5OA34EU",
          userGuid: "GA3BHZYFHZBSTBB7VDOZA5IKCM",
          countryOfSignup: "US",
          currentCountry: "US",
          membershipStatus: "CURRENT_MEMBER",
          authURL: "1681999843598.beE5ZQJAa3i7Ve\x2BEpP\x2BLDWt1o64\x3D",
          isDVD: false,
          isBOBO: false,
          hasBOBOResult: true,
          isTestAccount: false,
          showCookieDisclosure: false,
          deviceTypeId: 1222,
          esnPrefix: "NFCDCH",
          esn: "NFCDCH-MC-K341MP2VW968RE6CW6YDYTC62F4GHQ",
          isKids: false,
          memberSince: "February\x202014",
          pacsFeatures: {
            didFallback: false,
            featureResponses: [
              {
                tracing: { traceRecords: [] },
                frictionResponse: { stepUp: {} },
                pacsDetail: {
                  pacsExperience: "DEFAULT",
                  pacsProfileType: "REGULAR",
                  pacsDetailCode: "NONE",
                },
                responseClassification: "ALLOWED",
                featureName: "CAN_BROWSE",
                featureNameNonstrict: "",
              },
              {
                tracing: { traceRecords: [] },
                frictionResponse: { stepUp: {} },
                pacsDetail: {
                  pacsExperience: "DEFAULT",
                  pacsProfileType: "REGULAR",
                  pacsDetailCode: "NONE",
                },
                responseClassification: "ALLOWED",
                featureName: "CAN_PLAYBACK",
                featureNameNonstrict: "",
              },
              {
                tracing: { traceRecords: [] },
                frictionResponse: { stepUp: {} },
                pacsDetail: {
                  pacsExperience: "DEFAULT",
                  pacsProfileType: "REGULAR",
                  pacsDetailCode: "NO_CONSENT",
                },
                responseClassification: "DENIED",
                featureName: "CAN_TRANSFER_PROFILES",
                featureNameNonstrict: "",
              },
              {
                tracing: { traceRecords: [] },
                frictionResponse: { stepUp: {} },
                pacsDetail: {
                  pacsExperience: "DEFAULT",
                  pacsProfileType: "REGULAR",
                  pacsDetailCode: "NONE",
                },
                responseClassification: "ALLOWED",
                featureName: "CAN_ACTIVATE_PROFILE_TRANSFERS",
                featureNameNonstrict: "",
              },
            ],
            campaignMetadatas: [],
          },
          connectedToFacebook: false,
          csPhoneNumber: "1-844-505-2993",
          currentRegion: "us-west-2",
          isAdultVerified: true,
          kidsWordmark: "",
          numProfiles: 5,
          numKidsProfiles: 1,
          kidsProfileGUID: "5YQZBI63LVA5XPWDRNP4VUQFOY",
          pinEnabled: false,
          rolloutPercentage: 95,
          ratings: { showFirstThumbMessage: false },
          timedTextStyleDefaults: {
            backgroundColor: null,
            backgroundOpacity: "OPAQUE",
            characterColor: "WHITE",
            characterEdgeAttributes: "DROP_SHADOW",
            characterEdgeColor: "BLACK",
            characterOpacity: "OPAQUE",
            characterSize: "MEDIUM",
            characterStyle: "PROPORTIONAL_SANS_SERIF",
            windowColor: null,
            windowOpacity: "OPAQUE",
          },
          timedTextStyleOverrides: {
            backgroundColor: null,
            backgroundOpacity: null,
            characterColor: null,
            characterEdgeAttributes: null,
            characterEdgeColor: null,
            characterOpacity: null,
            characterSize: null,
            characterStyle: null,
            windowColor: null,
            windowOpacity: null,
          },
          maturity: 1000000,
          maturityStrings: {
            labels: ["NC-17"],
            isLowest: false,
            isHighest: true,
          },
          ratingLevels: [
            {
              level: "10",
              labels: [
                {
                  label: "TV-Y",
                  description:
                    "Designed\x20to\x20be\x20appropriate\x20for\x20all\x20children",
                },
              ],
            },
            {
              level: "41",
              labels: [
                {
                  label: "TV-Y7",
                  description: "Suitable\x20for\x20ages\x207\x20and\x20up",
                },
              ],
            },
            {
              level: "50",
              labels: [
                {
                  label: "TV-G",
                  description: "Suitable\x20for\x20General\x20Audiences",
                },
                {
                  label: "G",
                  description: "Suitable\x20for\x20General\x20Audiences",
                },
              ],
            },
            {
              level: "70",
              labels: [
                {
                  label: "TV-PG",
                  description: "Parental\x20Guidance\x20suggested",
                },
                {
                  label: "PG",
                  description: "Parental\x20Guidance\x20suggested",
                },
              ],
            },
            {
              level: "80",
              labels: [
                {
                  label: "PG-13",
                  description:
                    "Parents\x20strongly\x20cautioned.\x20May\x20be\x20inappropriate\x20for\x20ages\x20under\x2013.",
                },
              ],
            },
            {
              level: "90",
              labels: [
                {
                  label: "TV-14",
                  description:
                    "Parents\x20strongly\x20cautioned.\x20May\x20not\x20be\x20suitable\x20for\x20ages\x20under\x2014.",
                },
              ],
            },
            {
              level: "100",
              labels: [
                {
                  label: "R",
                  description:
                    "Restricted.\x20May\x20be\x20inappropriate\x20for\x20ages\x20under\x2017.",
                },
              ],
            },
            {
              level: "110",
              labels: [
                { label: "TV-MA", description: "For\x20Mature\x20Audiences." },
              ],
            },
            {
              level: "120",
              labels: [
                {
                  label: "NC-17",
                  description:
                    "Inappropriate\x20for\x20ages\x2017\x20and\x20under",
                },
              ],
            },
          ],
          profileCreationLocked: false,
          isProfileLocked: false,
          accountOwnerName: "Juhi",
          persoSettings: { disableVideoMerch: null },
          isCountryCatalogAvailable: false,
          canCreateUserProfile: false,
          esnSource: "CREDENTIALS",
          esnBindingReason: "DISABLED",
          esnBindingStatus: "DISABLED",
        },
        showCookieDisclosure: false,
      },
      type: "api",
    },
    ab: {
      data: {
        _evaluatedTests: {
          2143: { id: 2143, cell: 1, attrs: {}, explicit: true },
          3210: { id: 3210, cell: 1, attrs: {}, explicit: true },
          6856: { id: 6856, cell: 5, attrs: {}, explicit: true },
        },
      },
    },
    geo: {
      data: {
        locale: {
          default: true,
          dir: "ltr",
          displayName: "English\x20\x28Norway\x29",
          fallbackDisplayName: "English",
          id: "en-NO",
          language: "en",
          isCursive: false,
          doubleByte: false,
          hasExtendedDiacritics: false,
          durationFormat: "hoursAndMinutes",
          fallbacks: ["en-GB", "en"],
        },
        preferredLocale: {
          country: "US",
          language: "en",
          dir: "ltr",
          isCursive: false,
          doubleByte: false,
          hasExtendedDiacritics: false,
          default: true,
          id: "en-NO",
        },
        supportedLocales: [
          {
            locale: "en-US",
            selected: false,
            default: true,
            country: "US",
            id: "en",
            displayText: "English",
          },
          {
            locale: "es-US",
            selected: false,
            default: false,
            country: "US",
            id: "es",
            displayText: "Espa\u00F1ol",
          },
          {
            locale: "pt-US",
            selected: false,
            default: false,
            country: "US",
            id: "pt",
            displayText: "Portugu\u00EAs",
          },
          {
            locale: "fr-US",
            selected: false,
            default: false,
            country: "US",
            id: "fr",
            displayText: "Fran\u00E7ais",
          },
          {
            locale: "sv-US",
            selected: false,
            default: false,
            country: "US",
            id: "sv",
            displayText: "Svenska",
          },
          {
            locale: "nb-US",
            selected: false,
            default: false,
            country: "US",
            id: "nb",
            displayText: "Norsk\x20bokm\u00E5l",
          },
          {
            locale: "fi-US",
            selected: false,
            default: false,
            country: "US",
            id: "fi",
            displayText: "Suomi",
          },
          {
            locale: "da-US",
            selected: false,
            default: false,
            country: "US",
            id: "da",
            displayText: "Dansk",
          },
          {
            locale: "nl-US",
            selected: false,
            default: false,
            country: "US",
            id: "nl",
            displayText: "Nederlands",
          },
          {
            locale: "de-US",
            selected: false,
            default: false,
            country: "US",
            id: "de",
            displayText: "Deutsch",
          },
          {
            locale: "ja-US",
            selected: false,
            default: false,
            country: "US",
            id: "ja",
            displayText: "\u65E5\u672C\u8A9E",
          },
          {
            locale: "it-US",
            selected: false,
            default: false,
            country: "US",
            id: "it",
            displayText: "Italiano",
          },
          {
            locale: "zh-US",
            selected: false,
            default: false,
            country: "US",
            id: "zh",
            displayText: "\u4E2D\u6587",
          },
          {
            locale: "ko-US",
            selected: false,
            default: false,
            country: "US",
            id: "ko",
            displayText: "\uD55C\uAD6D\uC5B4",
          },
          {
            locale: "ar-US",
            selected: false,
            default: false,
            country: "US",
            id: "ar",
            displayText: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
          },
          {
            locale: "pl-US",
            selected: false,
            default: false,
            country: "US",
            id: "pl",
            displayText: "Polski",
          },
          {
            locale: "tr-US",
            selected: false,
            default: false,
            country: "US",
            id: "tr",
            displayText: "T\u00FCrk\u00E7e",
          },
          {
            locale: "th-US",
            selected: false,
            default: false,
            country: "US",
            id: "th",
            displayText: "\u0E44\u0E17\u0E22",
          },
          {
            locale: "ro-US",
            selected: false,
            default: false,
            country: "US",
            id: "ro",
            displayText: "Rom\u00E2n\u0103",
          },
          {
            locale: "he-US",
            selected: false,
            default: false,
            country: "US",
            id: "he",
            displayText: "\u05E2\u05D1\u05E8\u05D9\u05EA",
          },
          {
            locale: "el-US",
            selected: false,
            default: false,
            country: "US",
            id: "el",
            displayText: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",
          },
          {
            locale: "id-US",
            selected: false,
            default: false,
            country: "US",
            id: "id",
            displayText: "Bahasa\x20Indonesia",
          },
          {
            locale: "hu-US",
            selected: false,
            default: false,
            country: "US",
            id: "hu",
            displayText: "Magyar",
          },
          {
            locale: "cs-US",
            selected: false,
            default: false,
            country: "US",
            id: "cs",
            displayText: "\u010Ce\u0161tina",
          },
          {
            locale: "vi-US",
            selected: false,
            default: false,
            country: "US",
            id: "vi",
            displayText: "Ti\u1EBFng\x20Vi\u1EC7t",
          },
          {
            locale: "hi-US",
            selected: false,
            default: false,
            country: "US",
            id: "hi",
            displayText: "\u0939\u093F\u0928\u094D\u0926\u0940",
          },
          {
            locale: "ms-US",
            selected: false,
            default: false,
            country: "US",
            id: "ms",
            displayText: "Bahasa\x20Melayu",
          },
          {
            locale: "ru-US",
            selected: false,
            default: false,
            country: "US",
            id: "ru",
            displayText: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
          },
          {
            locale: "hr-US",
            selected: false,
            default: false,
            country: "US",
            id: "hr",
            displayText: "Hrvatski",
          },
          {
            locale: "uk-US",
            selected: false,
            default: false,
            country: "US",
            id: "uk",
            displayText:
              "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
          },
          {
            locale: "fil-US",
            selected: false,
            default: false,
            country: "US",
            id: "fil",
            displayText: "Filipino",
          },
        ],
        supportedCountry: "ALLOW",
        requestCountry: {
          id: "US",
          countryName: "United\x20States",
          supportedLocales: ["en", "es"],
          defaultLocale: "en",
          status: "ALLOW",
          regionCode: "CA",
        },
        showPreTaxDisclaimer: false,
        showAltTermsOfUse: false,
        showLegalContactsLink: false,
        showIntlTerms: false,
        shouldReverseNameFields: false,
        hasLocaleQuery: false,
        localeUrl: null,
      },
    },
    userInfo: {
      data: {
        name: "Janvi",
        guid: "NLIPC7NYCJD5FPWK4DU5OA34EU",
        userGuid: "GA3BHZYFHZBSTBB7VDOZA5IKCM",
        countryOfSignup: "US",
        currentCountry: "US",
        membershipStatus: "CURRENT_MEMBER",
        authURL: "1681999843598.beE5ZQJAa3i7Ve\x2BEpP\x2BLDWt1o64\x3D",
        isDVD: false,
        isBOBO: false,
        hasBOBOResult: true,
        isTestAccount: false,
        showCookieDisclosure: false,
        deviceTypeId: 1222,
        esnPrefix: "NFCDCH",
        esn: "NFCDCH-MC-K341MP2VW968RE6CW6YDYTC62F4GHQ",
        isKids: false,
        memberSince: "February\x202014",
        pacsFeatures: {
          didFallback: false,
          featureResponses: [
            {
              tracing: { traceRecords: [] },
              frictionResponse: { stepUp: {} },
              pacsDetail: {
                pacsExperience: "DEFAULT",
                pacsProfileType: "REGULAR",
                pacsDetailCode: "NONE",
              },
              responseClassification: "ALLOWED",
              featureName: "CAN_BROWSE",
              featureNameNonstrict: "",
            },
            {
              tracing: { traceRecords: [] },
              frictionResponse: { stepUp: {} },
              pacsDetail: {
                pacsExperience: "DEFAULT",
                pacsProfileType: "REGULAR",
                pacsDetailCode: "NONE",
              },
              responseClassification: "ALLOWED",
              featureName: "CAN_PLAYBACK",
              featureNameNonstrict: "",
            },
            {
              tracing: { traceRecords: [] },
              frictionResponse: { stepUp: {} },
              pacsDetail: {
                pacsExperience: "DEFAULT",
                pacsProfileType: "REGULAR",
                pacsDetailCode: "NO_CONSENT",
              },
              responseClassification: "DENIED",
              featureName: "CAN_TRANSFER_PROFILES",
              featureNameNonstrict: "",
            },
            {
              tracing: { traceRecords: [] },
              frictionResponse: { stepUp: {} },
              pacsDetail: {
                pacsExperience: "DEFAULT",
                pacsProfileType: "REGULAR",
                pacsDetailCode: "NONE",
              },
              responseClassification: "ALLOWED",
              featureName: "CAN_ACTIVATE_PROFILE_TRANSFERS",
              featureNameNonstrict: "",
            },
          ],
          campaignMetadatas: [],
        },
        connectedToFacebook: false,
        csPhoneNumber: "1-844-505-2993",
        currentRegion: "us-west-2",
        isAdultVerified: true,
        kidsWordmark: "",
        numProfiles: 5,
        numKidsProfiles: 1,
        kidsProfileGUID: "5YQZBI63LVA5XPWDRNP4VUQFOY",
        pinEnabled: false,
        rolloutPercentage: 95,
        ratings: { showFirstThumbMessage: false },
        timedTextStyleDefaults: {
          backgroundColor: null,
          backgroundOpacity: "OPAQUE",
          characterColor: "WHITE",
          characterEdgeAttributes: "DROP_SHADOW",
          characterEdgeColor: "BLACK",
          characterOpacity: "OPAQUE",
          characterSize: "MEDIUM",
          characterStyle: "PROPORTIONAL_SANS_SERIF",
          windowColor: null,
          windowOpacity: "OPAQUE",
        },
        timedTextStyleOverrides: {
          backgroundColor: null,
          backgroundOpacity: null,
          characterColor: null,
          characterEdgeAttributes: null,
          characterEdgeColor: null,
          characterOpacity: null,
          characterSize: null,
          characterStyle: null,
          windowColor: null,
          windowOpacity: null,
        },
        maturity: 1000000,
        maturityStrings: {
          labels: ["NC-17"],
          isLowest: false,
          isHighest: true,
        },
        ratingLevels: [
          {
            level: "10",
            labels: [
              {
                label: "TV-Y",
                description:
                  "Designed\x20to\x20be\x20appropriate\x20for\x20all\x20children",
              },
            ],
          },
          {
            level: "41",
            labels: [
              {
                label: "TV-Y7",
                description: "Suitable\x20for\x20ages\x207\x20and\x20up",
              },
            ],
          },
          {
            level: "50",
            labels: [
              {
                label: "TV-G",
                description: "Suitable\x20for\x20General\x20Audiences",
              },
              {
                label: "G",
                description: "Suitable\x20for\x20General\x20Audiences",
              },
            ],
          },
          {
            level: "70",
            labels: [
              {
                label: "TV-PG",
                description: "Parental\x20Guidance\x20suggested",
              },
              { label: "PG", description: "Parental\x20Guidance\x20suggested" },
            ],
          },
          {
            level: "80",
            labels: [
              {
                label: "PG-13",
                description:
                  "Parents\x20strongly\x20cautioned.\x20May\x20be\x20inappropriate\x20for\x20ages\x20under\x2013.",
              },
            ],
          },
          {
            level: "90",
            labels: [
              {
                label: "TV-14",
                description:
                  "Parents\x20strongly\x20cautioned.\x20May\x20not\x20be\x20suitable\x20for\x20ages\x20under\x2014.",
              },
            ],
          },
          {
            level: "100",
            labels: [
              {
                label: "R",
                description:
                  "Restricted.\x20May\x20be\x20inappropriate\x20for\x20ages\x20under\x2017.",
              },
            ],
          },
          {
            level: "110",
            labels: [
              { label: "TV-MA", description: "For\x20Mature\x20Audiences." },
            ],
          },
          {
            level: "120",
            labels: [
              {
                label: "NC-17",
                description:
                  "Inappropriate\x20for\x20ages\x2017\x20and\x20under",
              },
            ],
          },
        ],
        profileCreationLocked: false,
        isProfileLocked: false,
        accountOwnerName: "Juhi",
        persoSettings: { disableVideoMerch: null },
        isCountryCatalogAvailable: false,
        canCreateUserProfile: false,
        esnSource: "CREDENTIALS",
        esnBindingReason: "DISABLED",
        esnBindingStatus: "DISABLED",
      },
    },
    interstitialModel: { data: { pagetype: "AKIRA" }, type: "Model" },
    akiraBrowserCheck: {
      data: {
        capable: true,
        supportsHTML5: "maybe",
        supportsHTML5withDRM: "maybe",
        supportsSL: "no",
        isMobile: false,
      },
      type: "Model",
    },
    truths: {
      data: {
        isAdsPlanAvailable: false,
        shouldShowDoNotSellInfoLink: true,
        isIELt12: false,
        isIELt10: false,
        isIELt9: false,
        isIELt8: false,
        isIpadSafariLt8: false,
        isSafariLt8: false,
        isSafariGt5: false,
        isChromeLt47: false,
        isAndroidBrowserLt4: false,
        isIELt9AndIpadLt8: false,
        missingFullVWSupport: false,
        isBrowserFirefox: false,
        isBrowserEdge: false,
        isBrowserIE: false,
        isBrowserChrome: true,
        isBrowserSafari: false,
        isBrowserOpera: false,
        focusVisibleMemberEnabled: true,
        isAutomation: false,
        isBaselineCluster: false,
        takesProdTraffic: true,
        masquerading: false,
        inApp: false,
        showCookieDisclosure: false,
        showCompatibilityDisclosure: false,
        showDisclosures: false,
        windowOnErrorLoggingEnabled: true,
        consolLoggingEnabled: true,
        extendedDiacriticsLanguage: false,
        isGreekAndSafari: false,
        cursiveScript: false,
        performanceMeasurementsEnabled: false,
        devCommandLineEnabled: false,
        showDevInfoConsole: false,
        shouldAutofillSignup: false,
        logBrowserPerformance: false,
        routeTrafficThroughFTL: false,
        routeAPIRequestsThroughFTL: false,
        enableNqMetadataEndpoint: true,
        routeDocRequestsThroughFTL: false,
        useServiceWorker: true,
        serviceWorkerInvestigation: false,
        serviceWorkerEmptyHandlers: false,
        enableLottieAnimations: false,
        proxyRequestsThroughMemberAPI: true,
        logDetailedReactErrors: true,
        isOpenInPromptEligible: false,
        showOpenInAppPrompt: false,
        isInternal: false,
        logCriticalResourceTiming: true,
        akiraPage: true,
        notAkiraPage: false,
        isBrowseAllowed: true,
        isAdsPlan: false,
        canActivateProfileTransfers: true,
        canManageAddOns: true,
        isJqueryRequired: false,
        isFakiraOrAccountPage: false,
        showRatings: true,
        lazyLoadLolomoDOM: true,
        currentProfileIsKids: false,
        showKoreanMaturityRatings: false,
        showCommonSense: true,
        showBroadcaster: false,
        descriptiveTranscriptEnabled: true,
        showKidsLink: true,
        inAppNotificationsPollingEnabled: true,
        profileOnrampEnabled: true,
        isCl2LoggingEnabledForDiscoveryPlayback: true,
        isCl2TrackingInfoMigrated: true,
        renoEnabled: true,
        websocketsEnabled: true,
        dynamicMessagesEnabled: true,
        identifierCheckEnabled: true,
        akiraTtlEnabled: true,
        localizedSearchArtwork: true,
        xhrHooksEnabled: true,
        profileMisMatchDetectionEnabled: true,
        accountLevelPinCountries: ["ID", "SG", "TR"],
        forceStaticBillboards: false,
        volatileBillboardsEnabled: true,
        enablePageTransitions: true,
        evidenceBobHoverDelay4Seconds: false,
        evidenceBobHoverDelay15Seconds: false,
        enablePushNotifications: true,
        latestTabFirstInNav: false,
        enableSafariTouchRedirect: false,
        isTop10Supported: true,
        isTop10KidsSupported: true,
        isCreatorHomeEnabled: true,
        showHeaderNotifications: true,
        teenProfileOption: false,
        useTeenProfileOptionalCopy: false,
        useTeenProfileRatingInTooltip: false,
        useTeenProfilePreteenOption: false,
        teenProfileRadioOption: false,
        noUUIDCaching: false,
        showAdultSwitchButton: false,
        showSwitchButton: false,
        usePreviewModal: true,
        serveOldJAWBOBCode: false,
        allowMyListAddFromMLT: true,
        hasSmallerButtons: true,
        canSeeAllEpisodes: true,
        openDPFromMLT: false,
        bobOnMLT: false,
        hideMLTSynopsis: false,
        redesignFollowup1Holdback: false,
        redesignFollowup1HoldbackControl: false,
        enablePersoInfoDensityToggle: false,
        removeInfoDensityInUI: false,
        cpuMetricsEnabled: false,
        runMultipleCpuMetrics: false,
        runShorterBenchmark: false,
        delayBenchmark: false,
        highlightContinueWatchingRow: false,
        highlightContinueWatchingRowWithRedStreams: false,
        disableCollectionsUma: false,
        enableCreatorHome: true,
        contextAwareImages: true,
        newAndPopularLabel: true,
        enablePreviewToggle: true,
        showPreviewsToggleInHeader: false,
        showMuteToggleInHeader: false,
        showPreviewsToggleOnVideoMerch: false,
        defaultPreviewsToggleToOff: false,
        enableKidsTransitionAnimation: false,
        enableProfileGateTransitionSound: false,
        lowerProfileGateTransitionVolume: false,
        enableProfileGateTransitionAnimation: false,
        enableProfileTransition: false,
        enableMultiLanguageCatalog: false,
        logPrefetchRowsTTLAndError: true,
        infoDensityToggleHeavyMetadata: false,
        infoDensityToggleReducedRowCount: false,
        infoDensityToggleInlineMiniModal: false,
        infoDensityToggleDisableAwareness: false,
        enableInfoDensityToggle: false,
        enableLolomoPrefetchSixRows: false,
        enableLolomoRowsPrefetchRetry: false,
        enableLolomoRowsFetchOnScroll: false,
        logDeviceAndBrowserPreference: true,
        addMissingGalleryLinks: true,
        enablePageTitles: true,
        enableGalleryModal: true,
        moreVisibleRowHeaderLink: true,
        enableAroGenreModal: true,
        enableExpandableAroGenreModal: true,
        subtitlePrefsByDevice: false,
        accessibilityNavEnabled: false,
        enableAvifImageFormat: false,
        enablePlayPrediction: true,
        enableBillboardPrepare: true,
        enableBillboardTitlePrepare: true,
        enableDetailsTitlePrepare: true,
        showTudumPromo: false,
        thumbsWayUpEnabled: true,
        moreInfoMiniDPEnabled: false,
        doubleThumbsRedesignEnabled: false,
        pollRenoOnReconnectOnly: false,
        disableRenoPolling: false,
        showFirstTimeHomepageTutorial: false,
        showOtherPlatformUpsellEducation: false,
        useNumericStepIndicator: false,
        enableGraphqlDP: false,
        enableGraphqlClient: true,
        enableNapaSearch: false,
        enableKidsBrandRealignment: true,
        hasUmaMessage: false,
        requireAttemptsToSkipVerifyPhoneNumberUMA: false,
        hasAB36101UMA: false,
        isClcsInterstitialEnabled: false,
        isHawkinsInterstitialEnabled: false,
        ANONYMOUS: false,
        CURRENT_MEMBER: true,
        FORMER_MEMBER: false,
        DVD_ONLY_MEMBER: false,
        NEVER_MEMBER: false,
        isPlaybackAllowed: true,
        mdx2Enabled: true,
        mdxEnabledWithTestAccount: false,
        maybeSupportsSilverlight: false,
        requiresNFPlayer: true,
        fourKDemoEnabled: false,
        playbackAdvisoriesEnabled: true,
        skipCreditsEnabled: true,
        limitedSVGSupport: false,
        playerUIMilestonesEnabled: false,
        seamlessPlaybackEnabledForUI: true,
        isPlayerPerformanceReportingEnabled: true,
        reportAProblemControlEnabled: true,
        playerUseUmaContainer: true,
        watchingInteractiveTitle: false,
        interactiveDebugEnabled: false,
        cropContentLetterboxing: true,
        preferUnletterboxedContent: true,
        callVideoPlayerEngageMethod: true,
        interactiveSeekControlsDisabled: false,
        interactiveSkipTutorialDisabled: false,
        horizontalEpisodeSelectorEnabled: false,
        enableProductizedPlayerUI: true,
        showUpsellLegalDisclaimer: true,
        showSLSToolTip: false,
        useSLSOnText: false,
        playbackSpeedEnabled: true,
        reportAProblemEnabled: true,
        reportAProblemShowSensitivityCheckbox: true,
        disableGlobalKeyboardScrub: false,
        alwaysLoadVideoMetadata: false,
        enableSkipIntroPlaygraph: false,
        enablePlaybackInterstitialRequest: true,
        allowADTitleListCreation: false,
        isIosInAppSourced: false,
        redirectOnIosInAppSourced: false,
        isAppStoreSignup: false,
        showReferralLegacyModal: false,
        isSimpleDroid: false,
        isGiftCardFlow: false,
        isGiftCardMemberMode: false,
        isSignupSimplicity: false,
        isMemberSimplicity: false,
        isOnboardingSimplicity: false,
        isPartnerConnectSimplicity: false,
        isBeneficiaryGraduate: false,
        isPartnerBilled: false,
        isTvQrPiSignup: false,
        blockAndroidIntent: false,
        mockPaymentRequestEnabled: null,
        mockItunesPaymentEnabled: null,
        isInApp: false,
        isIOSInApp: false,
        netflixClientPlatform: "browser",
        isReferralSignupFlow: false,
        showPartnerHeader: false,
        isValidOriginalsLinkCountry: false,
        isNonMemberManualFontDetectionNeeded: true,
        isLegacyFlow: false,
        isLanguageSelectorInHeader: true,
        require_additional_cookie_consent: false,
        includeOneTrustScript: true,
        forceOneTrustEnglishLocalization: false,
        shouldIncludeLanguageDisclaimer: false,
        isAB36101Enabled: true,
        useHawkinsConsumerOnNmhp: true,
        isNmhpReskin: false,
        isInHawkinsConsumerMigration: false,
        isAdsPlanRichBannerEnabled: false,
        isPartnerBaoDowngradePricingEnabled: false,
        isAdsPlanExitIntentEnabled: false,
        isAdsPlanExitIntentSavingsCopyEnabled: false,
        isAdsPlanPreSelected: false,
        isClipsDeepLink: false,
        isExtrasDeepLink: false,
        isSupplementalDeepLink: false,
        isNmContentPage: true,
        isNmTitlePage: true,
        logHighCardinalityTitlePageMetrics: null,
        isNmCollectionsPage: false,
        showNmCollectionsPages: true,
        hideExternalLogin: false,
        clearMslDataOnLogout: true,
        isVideoMerchEnabled: true,
        hasVideoMerchInBob: true,
        hasVideoMerchInJaw: true,
        userDisabledVideoMerchInSettings: false,
        isArabic: false,
        isThai: false,
        useManualFontDetection: false,
        mopVerificationForChangeEmailEnabled: true,
        isModernBrowser: true,
        fromIOSApp: false,
        enableDnaSubtitlePrefs: false,
        shouldAutoSubmitCashPaymentForm: false,
        isProfileTransferPage: false,
        shouldAllowDeferredUpgrades: false,
        shouldDisplayMorePremiumDescription: false,
        shouldDisplayMorePremiumDisclaimer: false,
      },
    },
    inapp: {
      data: {
        esn: "NFCDCH-MC-K341MP2VW968RE6CW6YDYTC62F4GHQ",
        esnPrefix: "NFCDCH",
        signupEnabled: false,
        isAnonymous: false,
        inapp: false,
        sharedUuid: false,
        windows: false,
        android: false,
        ios: false,
        osType: "unknown",
        unsupportedLanguageMessageURLs: false,
        anonymous: false,
      },
      type: "Model",
    },
    assetHosts: {
      data: {
        ASSETS_HOST: "https:\x2F\x2Fassets.nflxext.com",
        IMGPATH: "https:\x2F\x2Fassets.nflxext.com\x2Fen_us",
        CDNPATH: "https:\x2F\x2Fassets.nflxext.com\x2Fffe\x2Fsiteui",
      },
      type: "Model",
    },
    showCookieDisclosure: { data: false, type: "Model" },
    octoberSkyProperties: {
      data: {
        status: "ALLOW",
        supportedLocales: ["en", "es"],
        defaultLocale: "en",
        id: "US",
        displayName: "United\x20States",
        props: {
          pin_required: false,
          pin_enabled: false,
          show_pay_after_free_month: false,
          alt_terms_of_use_enabled: false,
          show_terms_intl_transaction: false,
          show_kr_footer_disclaimer: false,
          showLegalContactsLink: false,
          inAppIOSSignupSupport: true,
          regPageSimplifiedMessaging: false,
          minimum_verification_age: "18",
          payment_card_number_first: false,
          phone_sms_consent_enabled: false,
          signup_tou_region: "us",
          signup_tou_checkbox: false,
          signup_tou_has_minimized_consents: false,
          partner_connect_tou_region: "us",
          partner_connect_tou_checkbox: false,
          hide_country_in_footer_and_title: true,
          redirect_odp_to_info: true,
          pin_required_min_age: "",
          pin_reset_on_non_pin_content: false,
          preTaxDisclaimerOnPrice: false,
          showRedeemGiftInFooter: true,
          showGiftLandingLink: true,
          force_hawkeye_cookie: false,
          buyGiftCardOnlineLink:
            "https:\x2F\x2Fwww.gamestop.com\x2Fcollection\x2Fnetflix",
          require_additional_cookie_consent: false,
          override_maturity_names_little_kids: "",
          override_maturity_names_older_kids: "",
          override_maturity_names_teens: "",
          override_maturity_names_adults: "",
          override_maturity_names_restricted: "",
          maturity_toggle_by_label: false,
          cancelBundleUponPartnerPause: false,
          hide_free_trial_button_label: false,
          free_trial_eligible: false,
          show_language_disclaimer: false,
          cookie_disclosure_text_type: "",
          show_start_paid_membership_except_ppp: false,
          should_show_extra_member_new_tag: true,
          should_show_paid_locations_new_tag: false,
          show_footer_guarantee_link: false,
          show_footer_do_not_sell_info_link: true,
          show_footer_privacy_statement_text: false,
          show_footer_netflix_shop_link: true,
        },
      },
      type: "Model",
    },
    ftlModel: {
      data: {
        configData: {
          cell: 1,
          maxErrors: -1,
          errorsThrottleLimit: 3,
          hosts: ["www.netflix.com"],
          targets: [{ host: "", name: "primary" }],
        },
        enabled: true,
      },
      type: "Model",
    },
    profileGateState: { data: 0 },
    services: {
      data: {
        api: {
          protocol: "https",
          hostname: "www.netflix.com",
          name: "api",
          path: ["api", "shakti"],
          apiRoot: "api",
        },
        buildIdentifier: {
          protocol: "https",
          hostname: "www.netflix.com",
          name: "buildIdentifier",
          path: ["\x2FbuildIdentifier"],
        },
        dvd: {
          protocol: "https",
          hostname: "www.netflix.com",
          name: "dvd",
          path: ["\x2FDVDApiProxy"],
        },
        memberapi: {
          protocol: "https",
          hostname: "www.netflix.com",
          path: ["\x2Fnq\x2Fwebsite\x2Fmemberapi\x2Fvd906c3ed"],
          isNodequark: true,
        },
      },
      type: "Model",
    },
    consolidatedLogging: {
      data: {
        loggingConstants: {
          locale: "en-NO",
          sessionLength: 30,
          uiMode: "member",
          ownerToken: "NLIPC7NYCJD5FPWK4DU5OA34EU",
          "accept-language": "en-US,en\x3Bq\x3D0.9",
        },
        enabled: true,
      },
      type: "Model",
    },
    evidon: { data: {}, type: "Model" },
    actionData: { data: {}, type: "Model" },
    playerModel: {
      data: {
        config: {
          core: {
            initParams: {
              version: "0.1995.0",
              browserInfo: {
                hardware: "computer",
                name: "chrome",
                version: "112.0.0.0",
                os: { name: "mac", version: "10.15.7" },
              },
              breakOnError: false,
              endpoint: true,
              downloadReportDenominator: 20,
              aseReportDenominator: 20,
              allowRequestsWithoutMsl: true,
              nudgeSourceBuffer: false,
              applyProfileStreamingOffset: true,
              forceDisableLiveUIByMovieIds: [
                81011063, 81011064, 81011065, 81361018, 81011061, 81011062,
                80092835, 81666032, 81476229, 81476230, 81476231,
              ],
              enableLivePlaybackRateDriftCorrection: false,
              shedLogblobTypes: ["serversel"],
              esn: "NFCDCH-MC-K341MP2VW968RE6CW6YDYTC62F4GHQ",
            },
            assets: {
              core: "https:\x2F\x2Fassets.nflxext.com\x2Fen_us\x2Fffe\x2Fplayer\x2Fhtml\x2Fcadmium-playercore-6.0039.753.911.js",
              version: "6.0039.753.911",
            },
          },
          ui: {
            initParams: {
              environment: "prod",
              preferredLanguages: "en-NO",
              errorSupportUrls: {
                "F7031-1102": "25078",
                "H7053-1803": "14452",
                "H7111-1101": "14563",
                H7354: "12993",
                "H7361-1253-80070005": "32876",
                "M7355-1203": "22952",
                "M7357-1003": "14759",
                "M7357-1269": "28184",
                "M7701-1003": "27451",
                "M7702-1003": "30321",
                S7354: "25711",
                S7706: "115567",
                "F7053-1803": "32660",
                "F7701-1003": "32661",
                "O7702-1003": "40838",
                "F7121-3077": "109141",
                "M7121-3077": "109120",
                "O7121-3077": "109142",
                "F7121-3078": "109144",
                "M7121-3078": "109143",
                "O7121-3078": "109145",
              },
              chromeVersion: "Chrome\x20112.0.0.0",
              windowScaling: true,
              uimode: "akira",
              apiUrl: "https:\x2F\x2Fwww.netflix.com\x2Fapi\x2Fshakti\x2Fmre",
              postPlayApiRevision: "",
              preserveLastFrame: true,
              mdx2Enabled: true,
              hideSupportUrl: false,
              uiTrackingEnabled: true,
              uiTrackingEndpoint:
                "\x2Fuitracking\x2Fusers\x2Fpresentationtracking",
              uiVersion: "shakti-vd906c3ed",
              uiPlatform: "SHAKTI",
              enableTrickPlay: true,
              breakOnError: false,
              disableVideoRightClickMenu: false,
              renderTimedText: true,
              reportProblemEnabled: true,
              akiraMetadataStrategy: "shakti",
              forceCCPaint: true,
              requestFromNetflix: false,
              pinConfig: {
                isEnabled: false,
                resetUrl: "https:\x2F\x2Fwww.netflix.com\x2Fplayer\x2Fpinreset",
                pinResetOnNonPinContent: false,
                isAdultVerified: true,
                apiEndpoint:
                  "https:\x2F\x2Fwww.netflix.com\x2Fapi\x2Fshakti\x2Fmre\x2Fpin\x2Fservice",
              },
              timedTextStyleDefaults: {
                backgroundColor: null,
                backgroundOpacity: "OPAQUE",
                characterColor: "WHITE",
                characterEdgeAttributes: "DROP_SHADOW",
                characterEdgeColor: "BLACK",
                characterOpacity: "OPAQUE",
                characterSize: "MEDIUM",
                characterStyle: "PROPORTIONAL_SANS_SERIF",
                windowColor: null,
                windowOpacity: "OPAQUE",
              },
              timedTextStyleOverrides: {
                backgroundColor: null,
                backgroundOpacity: null,
                characterColor: null,
                characterEdgeAttributes: null,
                characterEdgeColor: null,
                characterOpacity: null,
                characterSize: null,
                characterStyle: null,
                windowColor: null,
                windowOpacity: null,
              },
              showRatings: true,
              largeDisplayDimensionThreshold: { height: 900, width: 1600 },
              maxAutoPlaySeconds: 15,
              autoplayInterrupterTimestamp: 120,
              ignoreUserActivity: false,
              webkitDecodedFrameCountIncorrectlyReported: true,
              secureUrls: true,
              playerMobileOnlyUpsellEnabled: true,
              playerUpsellEnabled: true,
              skipCreditsEnabled: true,
              skipContentEnabled: true,
              skipCreditsDisplayDuration: 6000,
              bookmarkByMovieId: {},
              focusPlayerWrapperAfterControlClick: false,
              limitedSVGSupport: false,
              metadataRequestFormat: "NOFALCOR",
              mdxInitTimeout: 120000,
              castSdkConnectTimeout: 20000,
              mdxConnectionTimeout: 60000,
              castSdkDisconnectTimeout: 60000,
              signoutUrl: "\x2FSignOut\x3Flnkctr\x3DmL",
              profileGuid: "GA3BHZYFHZBSTBB7VDOZA5IKCM",
              failOnGuidMismatch: false,
              hasLimitedPlaybackFunctionality: false,
              shouldSendUserAuthData: true,
              shouldClearUserData: false,
              timedTextFontFamilyMapping: {
                PROPORTIONAL_SANS_SERIF:
                  "font-family:Netflix\x20Sans,Helvetica\x20Nueue,Helvetica,Arial,sans-serif\x3Bfont-weight:bolder",
                SMALL_CAPITALS:
                  "font-family:Netflix\x20Sans,Copperplate\x20Gothic,Copperplate\x20Gothic\x20Bold,Copperplate,Arial,Helvetica\x3Bfont-variant:small-caps\x3Bfont-weight:bolder",
              },
              uiContextConfig_motionBillboard: { preferredEngine: "cadmium" },
              uiContextConfig_bigRow: { preferredEngine: "cadmium" },
              uiGroupName: "",
              feedback: { minChars: 75, maxChars: 1000 },
              resetControlFocusAfterClick: true,
            },
            playerState: {},
            assets: { i18n: "discovery\x2Fakira\x2FBVUIChromeCommon" },
          },
        },
        playbackSupport: {
          supportsHTML5: "maybe",
          supportsHTML5withDRM: "maybe",
          supportsSL: "no",
        },
        endpoints: {
          metadata: "\x2Fmetadata",
          pathEvaluator: "\x2FpathEvaluator",
        },
      },
      type: "api",
    },
    footerContent: {
      data: {
        showKoreaFooterDisclaimer: false,
        links: [
          {
            labelKey: "audioAndSubtitles",
            url: "\x2Fbrowse\x2Fsubtitles",
            contexts: ["member"],
          },
          {
            labelKey: "audioDescription",
            url: "\x2Fbrowse\x2Faudio-description",
            contexts: ["member"],
          },
          {
            labelKey: "helpCenter",
            url: "https:\x2F\x2Fhelp.netflix.com\x2F",
            adultsOnly: true,
          },
          { labelKey: "giftCard", url: "\x2Fredeem", checkGiftRedeem: true },
          {
            labelKey: "mediaCenter",
            url: "https:\x2F\x2Fmedia.netflix.com\x2F",
          },
          { labelKey: "investors", url: "http:\x2F\x2Fir.netflix.com\x2F" },
          { labelKey: "jobs", url: "https:\x2F\x2Fjobs.netflix.com\x2F" },
          {
            labelKey: "shop",
            url: "https:\x2F\x2Fnetflix.shop\x2F",
            showFooterNetflixShopLink: true,
          },
          {
            labelKey: "tou",
            url: "https:\x2F\x2Fhelp.netflix.com\x2Flegal\x2Ftermsofuse",
          },
          {
            labelKey: "privacy",
            url: "https:\x2F\x2Fhelp.netflix.com\x2Flegal\x2Fprivacy",
          },
          {
            labelKey: "legalNotices",
            url: "https:\x2F\x2Fhelp.netflix.com\x2Flegal\x2Fnotices",
          },
          { labelKey: "cookies", url: "\x2FCookies" },
          {
            labelKey: "corporateInformation",
            url: "https:\x2F\x2Fhelp.netflix.com\x2Flegal\x2Fcorpinfo",
            excludedGeos: ["DE", "AT"],
          },
          {
            labelKey: "contactUs",
            url: "https:\x2F\x2Fhelp.netflix.com\x2Fcontactus",
          },
        ],
      },
      type: "Model",
    },
    adtech: {
      data: {
        iframeLocation:
          "https:\x2F\x2Fae.nflximg.net\x2Fmonet\x2Fscripts\x2Fadtech_iframe_target_05.html",
        doFlushBuffer: false,
        gclid: "",
        iframeData: {
          membership_status: "CURRENT_MEMBER",
          country: "US",
          region_code: "CA",
        },
      },
      type: "Model",
    },
    fastProps: {
      data: {
        "web.ui.player.addPlayerAppToWindow": false,
        "netflix.ui.akira.graphql.clientURL":
          "https:\x2F\x2Fweb.prod.cloud.netflix.com\x2Fgraphql",
        "netflix.ui.akira.graphql.serverVIP": "bfgstreaming-secure",
        "netflix.ui.akira.graphql.serverVIPSecure": true,
        "web.ui.missing_strings.enabled": true,
        "shakti.consolidated.logging.enabled": true,
        "shakti.consolidatedLogging.source": "www",
        "shakti.consolidatedLogging.sendRetries": 5,
        "shakti.consolidatedLogging.sendBackoffMs": 1000,
        "shakti.consolidatedLogging.batchIntervalMs": 5000,
        "shakti.consolidatedLogging.batchSize": 20,
        "shakti.consolidatedLogging.endpointBasePath": "\x2Fpersonalization",
        "shakti.consolidatedLogging.userInputTime": 1000,
        "shakti.clear.cookies.on.403.client": true,
        "web.ui.akira.websockets.error.logging.enabled": false,
        "netflix.ui.akira.kids.mylist.enabled": true,
        "ui.presTracking.scanDebounceMs": 200,
        "ui.presTracking.isActive": true,
        "ui.presTracking.sendIntervalMs": 8000,
        "wwwplayer.windows.phone.allow": false,
        "wwwplayer.android.chrome.allow": true,
        "wwwplayer.enhanced.features.detect.enabled": true,
        "shakti.cookies.autoExtendCookiesMaxAge": 7776000,
        "wwwplayer.firefox.win.widevine.enabled": true,
        "netflix.ui.akira.redirect.to.login.on.invalid.user": true,
        "shakti.fallback.esn.enabled": false,
        "shakti.fallback.esn.value": "WWW-BROWSE-",
        "web.ui.akira.reno.error.logging.enabled": false,
        "netflix.ui.akira.ratings.board.ids.with.icons": null,
        "netflix.ui.akira.originals.billboard.motionEnabled": true,
        "web.ui.dynamic.messages.request.error.cap": 2,
        "web.ui.dynamic.messages.polling.interval.playback": 300000,
        "web.ui.dynamic.messages.polling.interval.profilesgate": 1800000,
        "wwwplayer.config.skip.credits.enabled": true,
        "wwwplayer.config.skip.content.enabled": true,
        "netflix.ui.akira.prefetch.strategies.lolomoRow": {
          justJawBones: { numVideos: 7, bobs: false, jawBones: true },
          visibleRowBobs: { numVideos: 7, bobs: true, jawBones: false },
          allTitles: { numVideos: 100, bobs: false, jawBones: false },
        },
        "netflix.ui.akira.prefetch.rowSlide": {
          numVideos: 100,
          bobs: false,
          jawBones: false,
        },
        "oui.richOriginalsRow.enabled": true,
        "web.ui.akira.genres.subGenres.flatGalleryOverrides": [
          81299227, 81302819,
        ],
        "web.ui.akira.enable.maturity.mismatch.logging": true,
        "web.ui.fonts.nkufi.timeout.ms": 5000,
        "web.ui.fonts.graphik.timeout.ms": 5000,
        "web.ui.fonts.netflix.sans.timeout.ms": 5000,
        "web.ui.akira.new.version.compare.ttl": 28800000,
        "web.ui.akira.new.version.compare.interval": 120000,
        "web.ui.akira.new.version.compare.enabled": true,
        "ui.iframeCommunicator.maxLifetimeMs": 10000,
        "ui.iframeCommunicator.isActive": true,
        "netflix.ui.akira.enable.crossTab.profile.updation": true,
        "web.ui.profiles.max": 5,
        "web.ui.akira.profile.transfer.complete.cookie.name": null,
        "netflix.ui.akira.profileGate.gamesHandle.enabled": true,
        "netflix.ui.akira.profileGate.gamesHandle.validations.minLength": 3,
        "netflix.ui.akira.profileGate.gamesHandle.validations.maxLength": 16,
        "netflix.ui.akira.profileGate.gamesHandle.validations.regex":
          "\x5E\x28\x28\x3F\x3D[\\p{L}\\p{Nd}\\p{M}]\x29[\\p{Script\x3DInherited}\\p{Script\x3DCommon}\\p{Script\x3DLatin}\\p{Script\x3DKatakana}\\p{Script\x3DHiragana}\\p{Script\x3DHan}\\p{Script\x3DHangul}\\p{Script\x3DArabic}\\p{Script\x3DThai}\\p{Script\x3DGreek}\\p{Script\x3DHebrew}\\p{Script\x3DDevanagari}\\p{Script\x3DCyrillic}]\x29{3,16}\x24",
        "netflix.ui.akira.manageProfile.enabled": true,
        "shakti.safeRedirectHostnames": [
          "netflix.com",
          "www.netflix.com",
          "tudum.netflix.com",
          "help.netflix.com",
        ],
        "web.ui.surveys.enabled": true,
        "web.ui.uma.dismissModalSeparately.enabled": true,
        "netflix.ui.partner.mhu.copy.enabled": false,
        "netflix.ui.akira.enable.social.links": true,
        "ui.iframeCommunicator.bwaTracking.isActive": true,
        "ui.iframeCommunicator.locations.aidsvc":
          "https:\x2F\x2Faidsvc.netflix.com\x2Fx",
        "netflix.ui.ads.sellInfo.footerLink.url":
          "https:\x2F\x2Fwww.netflix.com\x2Fdnsspi",
        "netflix.ui.akira.prefetch.page": {
          numBillboards: 2,
          numRows: 3,
          numVideos: 7,
          bobs: false,
          jawBones: false,
        },
        "netflix.ui.akira.prefetch.kids.page": {
          numBillboards: 0,
          rowMin: 0,
          numRows: 2,
          numVideos: 7,
          bobs: false,
          jawBones: false,
        },
        "netflix.ui.akira.max.lolomo.rows": 50,
        "netflix.ui.akira.prefetch.page.medium": {
          numBillboards: 2,
          numRows: 6,
          numVideos: 7,
          bobs: false,
          jawBones: false,
        },
        "netflix.ui.akira.prefetch.homeLoaded.6": {
          numBillboards: 0,
          rowMin: 25,
          numRows: 50,
          numVideos: 7,
          bobs: false,
          jawBones: false,
        },
        "netflix.ui.akira.prefetch.home.afterWarmerSmall": {
          numBillboards: 0,
          rowMin: 0,
          numRows: 10,
          numVideos: 7,
          numRowsOnScroll: 20,
          bobs: false,
          jawBones: false,
          forceUpdate: false,
        },
        "netflix.ui.akira.prefetch.home.afterWarmer": {
          numBillboards: 0,
          rowMin: 0,
          numRows: 50,
          numVideos: 7,
          bobs: false,
          jawBones: false,
          forceUpdate: false,
        },
        "netflix.ui.lolomo.firstChunkLoadIntervalMS": 50,
        "netflix.ui.lolomo.chunkLoadIntervalMS": 750,
        "netflix.ui.akira.prefetch.strategies.gallery": {
          minimum: { numVideos: 0, bobs: false, jawBones: false },
          small: {
            numVideos: 48,
            batchVideoSize: 12,
            bobs: false,
            jawBones: false,
          },
          medium: {
            numVideos: 48,
            batchVideoSize: 48,
            bobs: false,
            jawBones: false,
          },
          maximum: {
            numVideos: 5000,
            batchVideoSize: 150,
            bobs: true,
            jawBones: true,
          },
          lolomo: {
            numBillboards: 1,
            numRows: 3,
            numVideos: 7,
            bobs: false,
            jawBones: false,
          },
          lolomoMedium: {
            numBillboards: 1,
            numRows: 6,
            numVideos: 7,
            bobs: false,
            jawBones: false,
          },
          audiodescription: {
            numVideos: 350,
            batchVideoSize: 350,
            bobs: false,
            jawBones: false,
          },
        },
        "netflix.ui.akira.prefetch.strategies.gallery.lolomoMedium": {
          numBillboards: 1,
          numRows: 6,
          numVideos: 7,
          bobs: false,
          jawBones: false,
        },
        "netflix.ui.akira.prefetch.strategies.gallery.lolomo": {
          numBillboards: 1,
          numRows: 3,
          numVideos: 7,
          bobs: false,
          jawBones: false,
        },
        "netflix.ui.akira.prefetch.strategies.gallery.audiodescription": {
          numVideos: 350,
          batchVideoSize: 350,
          bobs: false,
          jawBones: false,
        },
        "netflix.ui.akira.enableSilverlight": true,
        "web.ui.player.exit.data.refresh.delay": 3000,
        "netflix.ui.akira.allowed.deeplinks.trackIds": [],
        NETFLIX_APP: "nq_website_core",
        "shakti.webVitals.enabledApps": [
          "nq_website_core",
          "nq_website_pulse",
          "nq_website_nonmember",
        ],
        "web.ui.akira.csrf.ttl": 172800000,
        "web.ui.akira.sessionContext.ttl": 38880000,
        "web.ui.akira.ttl": 604800000,
        "web.ui.akira.websockets.url":
          "wss:\x2F\x2Fpush.prod.netflix.com\x2Fws",
        "netflix.window.onerror.max.count": 10,
      },
    },
    profilesGate: { data: { idle_timer: 30 } },
    apm: { data: { enabled: false } },
    renderTruths: { data: {} },
    shakespeareStrings: {
      data: {
        "discovery\x2Fakira\x2FCommon": {},
        "discovery\x2Fakira\x2FPreviewModal": {},
        "common\x2Faccessibility": {},
        "discovery\x2Fakira\x2FBVUICommon": {},
        "discovery\x2Fakira\x2FBVUIChromeCommon": {},
        "discovery\x2Fakira\x2FBVUIIE": {},
        "discovery\x2Fakira\x2FBVUISafari": {},
        "discovery\x2Fakira\x2FBVUIFirefox": {},
        "discovery\x2Fakira\x2FBVUIChromeOS": {},
        "discovery\x2Fakira\x2FBillboard": {},
        "discovery\x2Fakira\x2FTitle": {},
        "_a\x2Fakira_components": {},
        "player\x2Fplayer": {},
        "discovery\x2Fakira\x2FChrome": {},
        "discovery\x2Fakira\x2FCustomizationMenu": {},
        "discovery\x2Fakira\x2FGallery": {},
        "common\x2FpageTitles": {},
        "discovery\x2Fakira\x2FMessaging": {},
        "discovery\x2Fakira\x2FInteractive": {},
        "common\x2Fcommon": {},
        a11y: {},
        "discovery\x2Fakira\x2FJawBone": {},
        "onboarding\x2FnewUserTutorial": {},
        "discovery\x2Fakira\x2FNotifications": {},
        "discovery\x2Fpartials\x2Fprofiles_gate": {},
        "account\x2FHdToggle": {},
        "account\x2FProfileHub": {},
        "account\x2FPin": {},
        "discovery\x2Fakira\x2FHeaderTabs": {},
        "discovery\x2Fakira\x2FSearch": {},
        "account\x2FViewingActivity": {},
        "account\x2FPriceChangeUma": {},
        "account\x2FMobileOnlyUpsellUma": {},
        "signup\x2Fads": {},
        "signup\x2Fpricetiering": {},
        "account\x2FChangePlan": {},
        "account\x2FcollectPhoneNumber": {},
        "account\x2FAccountSharing": {},
        "_a\x2Fcomponents_uma": {},
        "signup\x2Fcommon": {},
        "discovery\x2Fakira\x2FFooter": {},
        "_a\x2Fcomponents": {},
        "common\x2FfooterResponsive": {},
        "discovery\x2Fakira\x2FWatchAgain": {},
        "discovery\x2Fakira\x2FContainerPageEvidence": {},
        "core\x2Fnfse": {},
        "discovery\x2Fakira\x2FMdx": {},
        "discovery\x2Fwarnings": {},
        "core\x2Fnfse-v2": {},
        "discovery\x2Fakira\x2FNotificationLanding": {},
      },
      type: "api",
    },
    i18nStrings: {
      data: {
        "discovery\x2Fakira\x2FCommon": {
          "button.dismiss.undo": "Undo",
          "remove.from.my.list.row.toast.confirmation":
            "\x3Cb\x3E{title}\x3C\x2Fb\x3E\x20has\x20been\x20removed\x20from\x20My\x20List.",
          "remove.from.row.survey.toast.confirmation":
            "Thanks\x20for\x20your\x20feedback.\x20\x3Cb\x3E{title}\x3C\x2Fb\x3E\x20has\x20been\x20removed\x20from\x20Continue\x20Watching.",
          "button.secondary.mylist": "My\x20List",
          "button.secondary.remindme": "Remind\x20Me",
          "button.secondary.save": "Save",
          "my.list.remove": "Remove\x20from\x20My\x20List",
          "my.list.add": "Add\x20To\x20My\x20List",
          "remindme.remove": "Remove\x20from\x20Remind\x20Me",
          "remindme.add": "Add\x20to\x20Remind\x20Me",
          "my.list.adding": "Adding...",
          "my.list.removing": "Removing...",
          "my.list.error": "Error",
          "button.secondary.caps.mylist": "MY\x20LIST",
          "button.secondary.caps.remindme": "REMIND\x20ME",
          "button.secondary.caps.save": "SAVE",
          "my.list.caps.remove": "REMOVE\x20FROM\x20MY\x20LIST",
          "my.list.caps.add": "ADD\x20TO\x20MY\x20LIST",
          "remindme.caps.remove": "REMOVE\x20TO\x20REMIND\x20ME",
          "remindme.caps.add": "ADD\x20TO\x20REMIND\x20ME",
          "my.list.caps.adding": "ADDING...",
          "my.list.caps.removing": "REMOVING...",
          "my.list.caps.error": "ERROR",
          "duration.minutes": "{minutes}m",
          "duration.hours": "{hours}h",
          "duration.Season":
            "{numSeasons,\x20plural,\x20one\x20{\x23\x20Season}\x20other\x20{\x23\x20Seasons}}",
          "duration.Collection":
            "{numSeasons,\x20plural,\x20one\x20{\x23\x20Collection}\x20other\x20{\x23\x20Collections}}",
          "duration.Volume":
            "{numSeasons,\x20plural,\x20one\x20{\x23\x20Volume}\x20other\x20{\x23\x20Volumes}}",
          "duration.Special":
            "{numSeasons,\x20plural,\x20one\x20{\x23\x20Special}\x20other\x20{\x23\x20Specials}}",
          "duration.Set":
            "{numSeasons,\x20plural,\x20one\x20{\x23\x20Set}\x20other\x20{\x23\x20Sets}}",
          "duration.Book":
            "{numSeasons,\x20plural,\x20one\x20{\x23\x20Book}\x20other\x20{\x23\x20Books}}",
          "duration.Part":
            "{numSeasons,\x20plural,\x20one\x20{\x23\x20Part}\x20other\x20{\x23\x20Parts}}",
          "duration.Series":
            "{numSeasons,\x20plural,\x20one\x20{\x23\x20Series}\x20other\x20{\x23\x20Series}}",
          "duration.Chapter":
            "{numSeasons,\x20plural,\x20one\x20{\x23\x20Chapter}\x20other\x20{\x23\x20Chapters}}",
          "duration.Unknown":
            "{numSeasons,\x20plural,\x20one\x20{\x23\x20Season}\x20other\x20{\x23\x20Seasons}}",
          "duration.NO_NAV_LABEL":
            "{numSeasons,\x20plural,\x20one\x20{\x23\x20Season}\x20other\x20{\x23\x20Seasons}}",
          "rating.new": "New",
          "rating.match": "{matchScore}\x25\x20Match",
          "play.button.annotation.next.up": "Next\x20Episode",
          "play.button.annotation.next.episode.uppercase": "NEXT\x20EPISODE",
          "play.button.annotation.resume": "Resume",
          "play.button.annotation.resume.uppercase": "RESUME",
          "play.button.annotation.play": "Play",
          "slider.handle.previous": "See\x20previous\x20titles",
          "slider.handle.next": "See\x20more\x20titles",
          "progress.summary": "{BOOKMARK}\x20of\x20{RUNTIME}m",
          "evidence.sims":
            "{count,\x20plural,\x20one\x20{Watch\x20if\x20you\x20like\x20\x3Cb\x3E{TITLE}\x3C\x2Fb\x3E}\x20other\x20{Watch\x20if\x20you\x20like\x20\x3Cb\x3E{TITLE1}\x3C\x2Fb\x3E\x20or\x20\x3Cb\x3E{TITLE2}\x3C\x2Fb\x3E}}",
          "remove.from.row.tooltip": "Remove\x20from\x20row",
          "remove.from.row.survey.modal.heading": "Tell\x20us\x20more",
          "remove.from.row.survey.modal.like":
            "I\x20like\x20this\x20but\x20don\u2019t\x20want\x20to\x20continue\x20watching",
          "remove.from.row.survey.modal.dislike":
            "I\x20don\u2019t\x20like\x20this",
          "remove.from.row.survey.modal.cleaning": "Just\x20cleaning\x20up",
          "duration.Episode":
            "{numEpisodes,\x20plural,\x20one\x20{\x23\x20Episode}\x20other\x20{\x23\x20Episodes}}",
          "version.detection.refresh":
            "The\x20newest\x20version\x20of\x20Netflix\x20is\x20now\x20available\x21\x20Refresh\x20your\x20browser\x20for\x20the\x20latest\x20updates.",
          "browser.refresh": "Refresh\x20browser",
          "button.close": "Close",
        },
        "discovery\x2Fakira\x2FPreviewModal": {
          "button.tooltip.reminder.set": "Reminder\x20set",
          "button.tooltip.expand.modal": "Episodes\x20\x26\x20info",
          "button.tooltip.expand.standalone.modal": "More\x20info",
          "button.restart": "Restart",
          "button.tooltip.thumbs.up": "I\x20like\x20this",
          "button.tooltip.thumbs.down": "Not\x20for\x20me",
          "button.tooltop.thumbs.lovedit": "Love\x20this\x21",
          "button.tooltip.thumbs.rated": "Rated",
          "button.tooltip.add.to.my.list.2": "Add\x20to\x20My\x20List",
          "button.tooltip.remove.from.my.list": "Remove\x20from\x20My\x20List",
          "button.tooltip.thumbs.info":
            "Now\x20you\x20can\x20also\x20love\x20titles\x21\x20Rate\x20to\x20get\x20better\x20recommendations.",
          "ads.cta.changePlan": "Change\x20plan\x20to\x20watch",
          "ads.cta.unavailable": "Unavailable",
          "button.tooltip.remind.me": "Remind\x20me",
          "tudum.promo.header":
            "Get\x20exclusive\x20{TITLE}\x20content:\x20sneak\x20peeks,\x20insider\x20news,\x20bonus\x20videos\x20and\x20extras.",
          "tudum.promo.cta.1": "Visit\x20Netflix\x20Tudum",
          "episode.available": "Available",
          "season.dropdown.all.episodes.option": "See\x20all\x20episodes",
          "info.contentWarning": "Content\x20Warning",
          "header.more.like.this.3": "More\x20Like\x20This",
          "header.episodes.section": "Episodes",
          "header.about.title":
            "About\x20\x3Cstrong\x3E{TITLE}\x3C\x2Fstrong\x3E",
          "header.trailers": "Trailers\x20\x26\x20More",
          "more.from.ryan.murphy": "More\x20from\x20Ryan\x20Murphy",
          "more.from.shondaland": "More\x20from\x20Shondaland",
          "tags.this.show.is.colon": "This\x20programme\x20is:",
          "tags.this.movie.is.colon": "This\x20film\x20is:",
          "tags.genres.colon": "Genres:",
          "tags.cast.colon": "Cast:",
          "tags.more": "more",
          "tags.maturityRating.colon": "Maturity\x20rating:",
          "tags.creators.colon": "Creators:",
          "tags.director.colon": "Director:",
          "tags.writer.colon": "Writer:",
          "about.also.available.on.dvd": "Also\x20available\x20on\x20DVD",
          "about.save.to.queue": "Save\x20to\x20My\x20List",
        },
        "common\x2Faccessibility": {
          "announce.mylist.added":
            "You\x20added\x20this\x20title\x20to\x20My\x20List",
          "announce.mylist.removed":
            "You\x20removed\x20this\x20title\x20from\x20My\x20List",
          "video.audio.description.start.ad":
            "{ACTION}\x20\u2013\x20start\x20with\x20Audio\x20Description\x20turned\x20on",
          "accessibility.skip.button.message":
            "Skip\x20by\x20pressing\x20the\x20\x27s\x27\x20key",
          "accessibility.skip.recap.message":
            "Press\x20the\x20\x27s\x27\x20key\x20to\x20skip\x20the\x20intro",
          "accessibility.skip.intro.message":
            "Press\x20the\x20\x27s\x27\x20key\x20to\x20skip\x20the\x20intro",
          "accessibility.skip.content.message":
            "{ACTION}\x20-\x20activate\x20by\x20pressing\x20the\x20\x27s\x27\x20key",
          "thumbs.rating.rated.up":
            "Already\x20rated:\x20thumbs\x20up\x20\x28click\x20to\x20remove\x20rating\x29",
          "thumbs.rating.rate.up": "Rate\x20thumbs\x20up",
          "thumbs.rating.rated.down":
            "Already\x20rated:\x20thumbs\x20down\x20\x28click\x20to\x20remove\x20rating\x29",
          "thumbs.rating.rate.down": "Rate\x20thumbs\x20down",
          "thumbs.rating.rated.wayup.v2":
            "Already\x20rated:\x20two\x20thumbs\x20up\x20\x28click\x20to\x20remove\x20rating\x29",
          "thumbs.rating.rate.wayup.v2": "Rate\x20two\x20thumbs\x20up",
          "announce.thumbs.rate.up":
            "You\x20gave\x20this\x20title\x20a\x20thumbs\x20up",
          "announce.thumbs.rate.down":
            "You\x20gave\x20this\x20title\x20a\x20thumbs\x20down",
          "announce.thumbs.rate.clear":
            "You\x20removed\x20your\x20rating\x20of\x20this\x20title",
          "uma.role.region.account.information": "Account\x20Notification",
          "profile.edit.maturity.settings": "Edit\x20maturity\x20settings",
          "profilehub.profile.name.label": "Profile\x20Name",
          "profilehub.edit.profile.avatar": "Change\x20profile\x20image",
          "navigation.skip.to.header": "Skip\x20to\x20header",
          "navigation.skip.to.main": "Skip\x20to\x20main\x20content",
          "navigation.skip.to.footer": "Skip\x20to\x20footer",
          "navigation.disable.previews": "Disable\x20previews",
          "navigation.enable.previews": "Enable\x20previews",
          "header.subgenres.audio.description":
            "Genres\x20with\x20Audio\x20Description",
          "accessibility.lolomo.header": "Netflix\x20Home",
          "video.audio.description.standalone.available":
            "Audio\x20Description\x20available",
          "video.audio.description.episodes.available":
            "Audio\x20Description\x20is\x20available\x20for\x20some\x20episodes",
          "video.audio.description.play":
            "start\x20with\x20Audio\x20Description\x20turned\x20on",
          "thumbs.rating.clear": "Remove\x20rating",
          "interactive.selection.selection.confirmation":
            "You\x20selected:\x20{SELECTION}",
          "interactive.selection.make.selection.choices.1":
            "You\x20only\x20have\x20one\x20choice:\x20{CHOICE1}",
          "interactive.selection.make.selection.choices.2":
            "Make\x20a\x20choice:\x20{CHOICE1}\x20or\x20{CHOICE2}",
          "interactive.selection.make.selection.choices.3":
            "Make\x20a\x20choice:\x20{CHOICE1},\x20{CHOICE2}\x20or\x20{CHOICE3}",
          "interactive.selection.make.selection.choices.4":
            "Make\x20a\x20choice:\x20{CHOICE1},\x20{CHOICE2},\x20{CHOICE3}\x20or\x20{CHOICE4}",
          "interactive.selection.make.selection": "Make\x20a\x20choice:",
        },
        "discovery\x2Fakira\x2FBVUICommon": {
          "ce-head-generic": "Pardon\x20the\x20interruption",
          "ce-text-default-v2":
            "Sorry,\x20we\x27re\x20having\x20trouble\x20with\x20your\x20request.",
          "ce-text-cdm_not_supported_other-v2":
            "Looks\x20like\x20your\x20browser\x20is\x20no\x20longer\x20supported.\x20Please\x20install\x20the\x20latest\x20version\x20or\x20try\x20another\x20browser.",
          "ce-text-cdm_not_supported_switch_mac-v2":
            "Looks\x20like\x20your\x20browser\x20is\x20no\x20longer\x20supported.\x20Please\x20switch\x20to\x20Safari.",
          "ce-text-cdm_not_supported_switch_windows-v2":
            "Looks\x20like\x20your\x20browser\x20is\x20no\x20longer\x20supported.\x20Please\x20switch\x20to\x20Internet\x20Explorer.",
          "ce-text-cdm_not_supported_update-v2":
            "Looks\x20like\x20this\x20version\x20of\x20your\x20browser\x20is\x20no\x20longer\x20supported.\x20Please\x20install\x20the\x20latest\x20version\x20to\x20continue\x20watching.",
          "ce-text-cdm_not_supported_warning_other-v2":
            "On\x20{date}\x20your\x20browser\x20will\x20no\x20longer\x20be\x20supported.\x20Please\x20upgrade\x20or\x20try\x20another\x20browser.\x20You\x20can\x20use\x20this\x20browser\x20until\x20then\x20by\x20refreshing\x20the\x20page.",
          "ce-text-cdm_not_supported_warning_switch_mac-v2":
            "On\x20{date}\x20your\x20browser\x20will\x20no\x20longer\x20be\x20supported.\x20Please\x20switch\x20to\x20Safari.\x20You\x20can\x20use\x20this\x20browser\x20until\x20then\x20by\x20refreshing\x20the\x20page.",
          "ce-text-cdm_not_supported_warning_switch_windows-v2":
            "On\x20{date}\x20your\x20browser\x20will\x20no\x20longer\x20be\x20supported.\x20Please\x20switch\x20to\x20Internet\x20Explorer.\x20You\x20can\x20use\x20this\x20browser\x20until\x20then\x20by\x20refreshing\x20the\x20page.",
          "ce-text-cdm_not_supported_warning_update-v2":
            "On\x20{date}\x20this\x20version\x20of\x20your\x20browser\x20will\x20no\x20longer\x20be\x20supported.\x20Please\x20update\x20your\x20browser.\x20You\x20can\x20use\x20this\x20browser\x20until\x20then\x20by\x20refreshing\x20the\x20page.",
          "ce-text-geo-v2":
            'Looks\x20like\x20you\x27re\x20connecting\x20through\x20a\x20VPN,\x20proxy\x20or\x20"unblocker"\x20service.\x20To\x20start\x20watching,\x20please\x20turn\x20off\x20any\x20of\x20these\x20services\x20and\x20try\x20again.',
          "ce-text-internet_connection_problem-v2":
            "We\x27re\x20having\x20trouble\x20playing\x20Netflix.\x20Please\x20check\x20your\x20internet\x20connection\x20and\x20try\x20again.",
          "ce-text-multiple_tabs-v2":
            "Looks\x20like\x20you\x27re\x20viewing\x20Netflix\x20from\x20more\x20than\x20one\x20browser\x20or\x20tab.\x20Please\x20close\x20any\x20extra\x20browsers\x20or\x20tabs,\x20then\x20reload\x20the\x20page.\x20If\x20that\x20doesn\x27t\x20fix\x20the\x20issue,\x20you\x20may\x20need\x20to\x20restart\x20your\x20computer.",
          "ce-text-pause_timeout-v2":
            'Your\x20video\x20was\x20paused\x20for\x20too\x20long,\x20but\x20we\x20saved\x20your\x20place.\x20Click\x20your\x20browser\x27s\x20"Refresh"\x20or\x20"Reload"\x20button\x20to\x20pick\x20up\x20where\x20you\x20left\x20off.',
          "ce-text-received_soad-v2":
            "Looks\x20like\x20you\x27re\x20signed\x20out.\x20Please\x20sign\x20in\x20again\x20to\x20watch\x20Netflix.",
          "ce-text-should_signout_and_signin-v2":
            "Looks\x20like\x20there\x27s\x20a\x20sign-in\x20problem.\x20Please\x20sign\x20out\x20of\x20Netflix\x20and\x20sign\x20in\x20again.",
          "ce-text-title_unavailable-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20your\x20country.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_at-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20Austria.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_be-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20Belgium.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_br-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20Brazil.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_ca-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20Canada.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_ch-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20Switzerland.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_de-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20Germany.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_dk-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20Denmark.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_es-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20Spain.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_fi-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20Finland.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_fr-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20France.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_ie-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20Ireland.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_it-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20Italy.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_jp-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20Japan.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_lu-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20Luxemburg.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_mx-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20Mexico.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_nl-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20the\x20Netherlands.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_no-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20Norway.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_pt-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20Portugal.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_se-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20Sweden.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_uk-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20the\x20United\x20Kingdom.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-text-title_unavailable_us-v2":
            "This\x20title\x20currently\x20isn\x27t\x20available\x20in\x20the\x20United\x20States.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          "ce-audio-tracks-title": "Audio",
          "ce-text-tracks-title": "Subtitles",
          "ce-text-track-assistive2": "{LANGUAGE}\x20\x28CC\x29",
          "ce-audio-track-label-surround":
            "{LANGUAGE}\x20\x28{SURROUND_FORMAT_LABEL}\x29",
          "track-currently-selected": "Currently\x20selected",
          "ce-button-alt-subtitles": "Audio\x20\x26\x20Subtitles",
          "ce-button-alt-episodes": "Episodes",
          "ce-text-session-expired-v2":
            "Your\x20Netflix\x20session\x20has\x20expired.\x20Please\x20sign\x20out\x20and\x20sign\x20in\x20again.",
        },
        "discovery\x2Fakira\x2FBVUIChromeCommon": {
          "ce-text-admin_mode_not_supported-v2":
            'Looks\x20like\x20your\x20browser\x20is\x20set\x20to\x20"Run\x20as\x20administrator".\x20Please\x20close\x20your\x20browser\x20and\x20reopen\x20it\x20without\x20choosing\x20"Run\x20as\x20administrator".',
          "ce-text-no_cdm-v3":
            'Please\x20visit\x20\x3Ca\x20href\x3D"chrome:\x2F\x2Fsettings\x2Fcontent\x2FprotectedContent"\x3Echrome:\x2F\x2Fsettings\x2Fcontent\x2FprotectedContent\x3C\x2Fa\x3E\x20and\x20make\x20sure\x20"Sites\x20can\x20play\x20protected\x20content"\x20is\x20selected.',
          "ce-text-plugin_error-v2":
            'We\x27re\x20having\x20trouble\x20playing\x20Netflix.\x20Please\x20make\x20sure\x20you\x27re\x20on\x20an\x20official\x20version\x20of\x20Chrome\x20and\x20try\x20again.\x20Learn\x20more\x20at\x20\x3Ca\x20href\x3D"www.google.com\x2Fchrome"\x3Ewww.google.com\x2Fchrome\x3C\x2Fa\x3E.',
          "ce-text-private_mode-v2":
            "We\x27re\x20having\x20trouble\x20playing\x20Netflix.\x20Please\x20make\x20sure\x20your\x20browser\x20isn\x27t\x20in\x20Private\x20mode\x20and\x20try\x20again.",
          "ce-text-should_upgrade-v2":
            'We\x27re\x20having\x20trouble\x20playing\x20Netflix.\x20Please\x20make\x20sure\x20you\x27re\x20using\x20the\x20latest\x20version\x20of\x20Chrome\x20and\x20try\x20again.\x20Learn\x20more\x20at\x20\x3Ca\x20href\x3D"www.google.com\x2Fchrome"\x3Ewww.google.com\x2Fchrome\x3C\x2Fa\x3E.',
          "ce-text-storage_quota-v2":
            "The\x20Netflix\x20Video\x20Player\x20requires\x20storage\x20on\x20your\x20computer.\x20Please\x20make\x20sure\x20your\x20browser\x20isn\x27t\x20in\x20Private\x20mode\x20and\x20allow\x20Netflix\x20to\x20store\x20data\x20on\x20your\x20computer.",
        },
        "discovery\x2Fakira\x2FBVUIIE": {
          "ce-text-admin_mode_not_supported-v2":
            'Looks\x20like\x20your\x20browser\x20is\x20set\x20to\x20"Run\x20as\x20administrator".\x20Please\x20close\x20your\x20browser\x20and\x20reopen\x20it\x20without\x20choosing\x20"Run\x20as\x20administrator".',
          "ce-text-no_cdm-v2":
            "Please\x20turn\x20on\x20Protected\x20Media\x20Playback\x20to\x20watch\x20Netflix.",
          "ce-text-plugin_error-v2":
            "We\x27re\x20having\x20trouble\x20playing\x20Netflix.\x20Please\x20make\x20sure\x20you\x27re\x20using\x20the\x20latest\x20version\x20of\x20Internet\x20Explorer\x20and\x20try\x20again.",
          "ce-text-private_mode-v2":
            "We\x27re\x20having\x20trouble\x20playing\x20Netflix.\x20Please\x20make\x20sure\x20your\x20browser\x20isn\x27t\x20in\x20Private\x20or\x20Guest\x20mode\x20and\x20try\x20again.",
        },
        "discovery\x2Fakira\x2FBVUISafari": {
          "ce-text-device_needs_service-v3":
            "There\x20appears\x20to\x20be\x20an\x20issue\x20with\x20your\x20device\x20that\x27s\x20preventing\x20you\x20from\x20streaming\x20content\x20on\x20Netflix.\x20Contact\x20Apple\x20Support\x20for\x20more\x20information.",
          "ce-text-no_cdm-v2":
            "We\x27re\x20having\x20trouble\x20playing\x20Netflix.\x20Please\x20make\x20sure\x20you\x27re\x20using\x20the\x20latest\x20version\x20of\x20Safari\x20and\x20try\x20again.",
          "ce-text-plugin_error-v2":
            "We\x27re\x20having\x20trouble\x20playing\x20Netflix.\x20Please\x20make\x20sure\x20you\x27re\x20using\x20the\x20latest\x20version\x20of\x20Safari\x20and\x20try\x20again.",
          "ce-text-private_mode-v2":
            "We\x27re\x20having\x20trouble\x20playing\x20Netflix.\x20Please\x20make\x20sure\x20your\x20browser\x20isn\x27t\x20in\x20Private\x20mode\x20and\x20try\x20again.",
          "ce-text-should_upgrade-v2":
            "We\x27re\x20having\x20trouble\x20playing\x20Netflix.\x20Please\x20make\x20sure\x20you\x27re\x20using\x20the\x20latest\x20version\x20of\x20Safari\x20and\x20try\x20again.",
          "ce-text-storage_quota-v2":
            "We\x20can\x27t\x20save\x20your\x20settings\x20because\x20you\x27re\x20in\x20Private\x20mode.\x20Please\x20go\x20to\x20the\x20Safari\x20menu\x20at\x20top\x20left\x20of\x20the\x20screen\x20and\x20uncheck\x20Private\x20Browsing.",
          "ce-text-unsupported_output-v2":
            "Looks\x20like\x20there\x27s\x20an\x20issue\x20with\x20your\x20display.\x20Please\x20make\x20sure\x20your\x20monitor\x20is\x20HDCP\x20compliant\x20and\x20isn\x27t\x20mirrored\x20using\x20AirPlay.\x20Contact\x20Apple\x20Support\x20for\x20more\x20information.",
        },
        "discovery\x2Fakira\x2FBVUIFirefox": {
          "ce-text-no_cdm-v2":
            'We\x27re\x20having\x20trouble\x20playing\x20Netflix.\x20Please\x20make\x20sure\x20you\x27re\x20using\x20the\x20latest\x20version\x20of\x20Firefox\x20and\x20try\x20again.\x20Learn\x20more\x20at\x20\x3Ca\x20href\x3D"support.mozilla.org\x2Fkb\x2Fupdate-firefox-latest-version"\x3Esupport.mozilla.org\x2Fkb\x2Fupdate-firefox-latest-version\x3C\x2Fa\x3E.',
          "ce-text-plugin_error-v2":
            'We\x27re\x20having\x20trouble\x20playing\x20Netflix.\x20Please\x20make\x20sure\x20you\x27re\x20using\x20the\x20latest\x20version\x20of\x20Firefox\x20and\x20try\x20again.\x20Learn\x20more\x20at\x20\x3Ca\x20href\x3D"support.mozilla.org\x2Fkb\x2Fupdate-firefox-latest-version"\x3Esupport.mozilla.org\x2Fkb\x2Fupdate-firefox-latest-version\x3C\x2Fa\x3E.',
          "ce-text-private_mode-v2":
            "We\x27re\x20having\x20trouble\x20playing\x20Netflix.\x20Please\x20make\x20sure\x20your\x20browser\x20isn\x27t\x20in\x20Private\x20mode\x20and\x20try\x20again.",
          "ce-text-should_upgrade-v2":
            'We\x27re\x20having\x20trouble\x20playing\x20Netflix.\x20Please\x20make\x20sure\x20you\x27re\x20using\x20the\x20latest\x20version\x20of\x20Firefox\x20and\x20try\x20again.\x20Learn\x20more\x20at\x20\x3Ca\x20href\x3D"support.mozilla.org\x2Fkb\x2Fupdate-firefox-latest-version"\x3Esupport.mozilla.org\x2Fkb\x2Fupdate-firefox-latest-version\x3C\x2Fa\x3E.',
          "ce-text-storage_quota-v2":
            "The\x20Netflix\x20Video\x20Player\x20requires\x20storage\x20on\x20your\x20computer.\x20Please\x20make\x20sure\x20your\x20browser\x20isn\x27t\x20in\x20Private\x20mode\x20and\x20allow\x20Netflix\x20to\x20store\x20data\x20on\x20your\x20computer.",
        },
        "discovery\x2Fakira\x2FBVUIChromeOS": {
          "ce-text-private_mode-v2":
            "Looks\x20like\x20you\x27re\x20browsing\x20in\x20Chrome\x27s\x20Guest\x20mode.\x20Please\x20sign\x20in\x20to\x20an\x20active\x20Google\x20account\x20to\x20use\x20Netflix.",
          "ce-text-should_upgrade-v2":
            'We\x27re\x20having\x20trouble\x20playing\x20Netflix.\x20Please\x20make\x20sure\x20you\x27re\x20using\x20the\x20latest\x20version\x20of\x20Chrome\x20and\x20try\x20again.\x20Learn\x20more\x20at\x20\x3Ca\x20href\x3D"www.google.com\x2Fchrome"\x3Ewww.google.com\x2Fchrome\x3C\x2Fa\x3E.',
          "ce-text-storage_quota-v2":
            "The\x20Netflix\x20Video\x20Player\x20requires\x20storage\x20on\x20your\x20computer.\x20Please\x20make\x20sure\x20your\x20browser\x20isn\x27t\x20in\x20Private\x20mode\x20and\x20allow\x20Netflix\x20to\x20store\x20data\x20on\x20your\x20computer.",
        },
        "discovery\x2Fakira\x2FBillboard": {
          "billboard.actions.featured": "Featured\x20Content",
          "billboard.actions.play": "Play",
          "billboard.actions.playVolume": "Play\x20Volume",
          "billboard.actions.playCollection": "Play\x20Collection",
          "billboard.actions.playSpecial": "Play\x20Special",
          "billboard.actions.playSet": "Play\x20Set",
          "billboard.actions.playBook": "Play\x20Book",
          "billboard.actions.playPart": "Play\x20Part",
          "billboard.actions.playSeries": "Play\x20Series",
          "billboard.actions.playChapter": "Play\x20Chapter",
          "billboard.actions.playSeason": "Season\x20{sequenceNumber}",
          "billboard.actions.playEpisode": "Play\x20Episode",
          "billboard.actions.rewatchShow": "Rewatch\x20Series",
          "billboard.actions.continueWatching": "Continue\x20Watching",
          "billboard.actions.playTrailer": "Trailer",
          "billboard.actions.listEpisodes": "Episodes",
          "billboard.actions.seeAll": "See\x20all",
          "billboard.actions.info": "More\x20Info",
          "billboard.actions.previous": "Previous\x20Title",
          "billboard.actions.next": "Next\x20Title",
          "billboard.actions.dot0": "See\x20first\x20title",
          "billboard.actions.dot1": "See\x20second\x20title",
          "billboard.actions.dot2": "See\x20third\x20title",
          "billboard.actions.replay": "Replay",
          "billboard.fromYourReminders": "From\x20Your\x20Reminders",
          "billboard.pivots.a11yLabel":
            "We\x20think\x20you\x27ll\x20like\x20{SIMS_TITLE}\x20because\x20you\x20watched\x20{WATCHED_TITLE}",
          "billboard.becauseYouWatched": "Because\x20you\x20watched:",
        },
        "discovery\x2Fakira\x2FTitle": {
          "maturity.rating.label": "Maturity\x20Ratings",
          "badge.hdr": "HDR",
          "badge.4k.ultra.hd": "Ultra\x20HD\x204K",
          "badge.hd": "HD",
          "actions.audioOff": "Turn\x20audio\x20off",
          "actions.audioOn": "Turn\x20audio\x20on",
          "mylist.prepromo.message":
            "This\x20title\x20will\x20appear\x20in\x20your\x20List\x20when\x20it\x20becomes\x20available.",
          "cast.label.with.colon": "Starring:",
        },
        "_a\x2Fakira_components": {
          BCl6dM: "Watch\x20live",
          "\x2Fd\x2BY0o": "expand\x20to\x20detail\x20modal",
          "2JTtzw": "Play\x20game",
          "wEFhF\x2F": "More\x20info",
          "9yQWOY":
            "{playerCount,\x20plural,\x20one\x20{\x23\x20Player}\x20other\x20{\x23\x20Players}}",
          "tags.category.colon": "Category:",
          "tags.maturityRating.colon": "Maturity\x20rating:",
          "tags.modes.colon": "Modes:",
          "tags.players.colon": "Players:",
          "tags.languages.colon": "Languages:",
          "tags.releaseYear.colon": "Release\x20year:",
          "tags.developer.colon": "Developer:",
        },
        "player\x2Fplayer": {
          "aria.label.player.fullscreen":
            "Netflix\x20video\x20player\x20full\x20screen",
          "aria.label.player.windowed": "Netflix\x20video\x20player",
          "nsre.episode.title": "{SHOW_TITLE}:\x20{EPISODE_TITLE}",
          "season.episode.title":
            "{SEASON_ABR}:E{EPISODE}\x20\u201C{TITLE}\u201D",
          "season.episode.title.single.season":
            "E{EPISODE}\x20\u201C{TITLE}\u201D",
          "button.exit.playback.browse": "Back\x20to\x20Browse",
          "progress.percentage": "{PERCENTAGE}\x25",
          "hidden.episode.numbers.status.with.show.title":
            "\x3Ch4\x3E{SHOW_TITLE}\x3C\x2Fh4\x3E\x3Cspan\x3E{EPISODE_TITLE}\x3C\x2Fspan\x3E",
          "next.episode.popup.title":
            "Ep.\x20{EPISODE_NUMBER}\x20{EPISODE_TITLE}",
          "status.bar.episodic":
            "\x3Ch4\x3E{SHOW_TITLE}\x3C\x2Fh4\x3E\x3Cspan\x3E{SEASON_LABEL}:E{EPISODE_NUMBER}\x3C\x2Fspan\x3E\x3Cspan\x3E{EPISODE_TITLE}\x3C\x2Fspan\x3E",
          "aria.label.player.episodes": "More\x20episodes",
          "button.audio.subtitles": "Audio\x20\x26\x20subtitles",
          "sls.subtitle.tooltip":
            "You\x20can\x20change\x20your\x20subtitles\x20settings\x20here.",
          "close-audio-modal": "Close",
          "paused.watching": "You\x27re\x20watching",
          "paused.season.episode.title":
            "{SEASON_TITLE}:\x20Ep.\x20{EPISODE_NUMBER}",
          "time.minutes": "{M}m",
          "time.hours.minutes": "{H}h\x20{M}m",
          "time.hours.minutes.seconds": "{H}h\x20{M}m\x20{S}s",
          "paused.paused": "Paused",
          "button.fullscreen": "Full\x20screen",
          "menu.exit.fullscreen": "Exit\x20full\x20screen",
          "aria.label.player.mdx": "Chromecast",
          "button.next.episode": "Next\x20episode",
          "menu.next.episode": "Next\x20episode",
          "button.play": "Play",
          "button.pause": "Pause",
          "button.polling.enable": "Enable\x20polling",
          "button.polling.disable": "Disable\x20polling",
          "aria.label.player.seek.time": "Seek\x20time\x20scrubber",
          "aria.value.text.time.scrubber": "{current}\x20of\x20{total}",
          "report.problem.button.aria.label":
            "Report\x20a\x20playback\x20problem\x20to\x20Netflix.",
          "report.problem.question.mark": "\x3F",
          "report.problem.popup.cta": "Something\x20wrong\x3F\x20Tell\x20us.",
          "aria.label.player.back": "Seek\x20back",
          "aria.label.player.forward": "Seek\x20forward",
          "skip.button": "Skip",
          "skip.recap.button": "Skip\x20recap",
          "skip.intro.button": "Skip\x20intro",
          "recap.skip.button": "SKIP\x20RECAP",
          "tutorial.skip.button": "SKIP\x20TUTORIAL",
          "button.volume": "Volume",
          "button.volume.muted": "Muted",
          "aria.value.text.percent.scrubber": "{value}\x25",
          "button.playback.speed": "Playback\x20speed",
          "button.playback.speed.normal": "1x\x20\x28Normal\x29",
          "button.playback.speed.50": "0.5x",
          "button.playback.speed.75": "0.75x",
          "button.playback.speed.125": "1.25x",
          "button.playback.speed.150": "1.5x",
          "pin.forgot": "Forgot\x20PIN\x3F",
          "pin.input": "PIN\x20entry\x20input\x20{INDEX}.",
          "pin.invalid": "Incorrect\x20PIN.\x20Please\x20try\x20again.",
          "pin.enter": "Enter\x20PIN\x20to\x20watch\x20restricted\x20content.",
          "pin.network.error":
            "Something\x20went\x20wrong.\x20Please\x20try\x20again\x20later.",
          "adult.verification.cancel": "Cancel",
          "adult.verification.verify": "Verify\x20age",
          "adult.verification.message":
            "You\x20must\x20verify\x20your\x20age\x20to\x20access\x20mature\x20content.",
          "advisories.rating": "Rating:",
          "autoplay.interrupter": "Are\x20you\x20still\x20watching\x3F",
          "button.restart.episode": "Play\x20from\x20beginning",
          "button.continue.playing": "Continue\x20playing",
          "postplay.episode.title":
            "{SEASON_TITLE}\x20Ep.\x20{EPISODE_NUMBER}\x20\u2013\x20{EPISODE_TITLE}",
          "postplay.button.moreepisodes": "More\x20episodes",
          "postplay.button.exitfullscreen": "Exit\x20full\x20screen",
          "postplay.recommendations.title":
            "Looking\x20for\x20something\x20else\x20to\x20watch\x3F",
          "postplay.more.info": "More\x20info",
          "postplay.recommendations.subtitle":
            "We\x20think\x20you\x27ll\x20enjoy\x20these\x20titles...",
          "postplay.opp.show.trailerheadertext":
            "Enjoyed\x20the\x20trailer\x3F",
          "postplay.play": "Play",
          "postplay.play.trailer": "Play\x20trailer",
          "postplay.continue.watching": "Continue\x20watching",
          "postplay.recommendations.seasons":
            "{SEASONS,\x20plural,\x20one\x20{1\x20Season}\x20other\x20{\x23\x20Seasons}}",
          "play.season.episode.index": "Play\x20{SEASON_ABR}:E{EPISODE}",
          "postplay.autoplay.trailer":
            "{SECONDS,\x20plural,\x20one\x20{Watch\x20the\x20trailer\x20in\x20\x3Cspan\x3E1\x20second\x3C\x2Fspan\x3E}\x20other\x20{Watch\x20the\x20trailer\x20in\x20\x3Cspan\x3E\x23\x20seconds\x3C\x2Fspan\x3E}}",
          "postplay.autoplay.trailer.in": "Trailer\x20in\x20{SECONDS}",
          "postplay.twoup.next.episode.in":
            "Next\x20episode\x20in\x20{SECONDS}",
          "postplay.twoup.watch.credits": "Watch\x20credits",
          "postplay.mylist": "My\x20List",
          "postplay.live.exit.stream": "Exit\x20livestream",
          "postplay.seasonrenewal.previewIn": "Preview\x20in\x20{SECONDS}",
          "postplay.seasonrenewal.upNextLabel": "Up\x20next:",
          "postplay.seasonrenewal.stopped": "Continue",
          "postplay.countdown.timer":
            "Starts\x20in\x20\x3Cstrong\x3E{CURRENT_TIME}\x3C\x2Fstrong\x3E\x20seconds",
          "postplay.countdown.timer.stopped":
            "Click\x20to\x20play\x20next\x20episode",
          "postplay.countdown.timer.singular":
            "Starts\x20in\x20\x3Cstrong\x3E1\x3C\x2Fstrong\x3E\x20second",
          "postplay.recommendations.rate": "Rate:",
          "postplay.rate": "Rate:\x20\u201C{title}\u201D",
          "postplay.button.tooltip.thumbs.up": "I\x20like\x20this",
          "postplay.button.tooltip.thumbs.down": "Not\x20for\x20me",
          "postplay.button.tooltop.thumbs.lovedit": "Love\x20this\x21",
          "postplay.button.tooltip.thumbs.rated": "Rated",
          "report.problem.buffering.link": "Go\x20to\x20Help\x20Centre",
          "report.problem.buffering.message":
            "For\x20problems\x20loading\x20video\x20or\x20streaming\x20from\x20Netflix,\x20you\x20may\x20find\x20solutions\x20in\x20the\x20Help\x20Centre.",
          "report.problem.close.aria.label":
            "Close\x20Report\x20a\x20Problem\x20dialogue\x20box",
          "report.problem.details.optional.disclaimer": "\x28optional\x29",
          "report.problem.details.header": "Any\x20more\x20details\x3F",
          "report.problem.dialog.header": "What\x27s\x20happening\x3F",
          "report.problem.dialog.subheader": "Tick\x20all\x20that\x20apply.",
          "report.problem.error":
            "Sorry,\x20there\x20was\x20an\x20error.\x20Please\x20try\x20again\x20later.",
          "report.problem.finish": "Finish",
          "report.problem.label.problem.definition":
            "Wrong\x20title\x20or\x20summary,\x20or\x20episode\x20out\x20of\x20order",
          "report.problem.label.problem.header": "Labelling\x20problem",
          "report.problem.network.problem.definition":
            "Frequent\x20rebuffering,\x20playback\x20won\x27t\x20start\x20or\x20other\x20problem",
          "report.problem.network.problem.header":
            "Buffering\x20or\x20connection\x20problem",
          "report.problem.sound.problem.definition":
            "Hard\x20to\x20hear,\x20not\x20matched\x20with\x20video\x20or\x20missing\x20in\x20some\x20parts",
          "report.problem.sound.problem.header": "Sound\x20problem",
          "report.problem.subdub.problem.definition":
            "Missing,\x20hard\x20to\x20read,\x20not\x20matched\x20with\x20sound,\x20misspellings\x20or\x20poor\x20translations",
          "report.problem.subdub.problem.header":
            "Subtitles\x20or\x20captions\x20problem",
          "report.problem.submit": "Submit\x20report",
          "report.problem.thanks.message":
            "Thanks,\x20we\x27ll\x20have\x20a\x20look.",
          "report.problem.video.problem.definition":
            "Blurry,\x20cuts\x20out\x20or\x20looks\x20strange\x20in\x20some\x20way",
          "report.problem.video.problem.header": "Video\x20problem",
          "seamless.watch.credits.button.postplay": "Watch\x20credits",
          "hidden.episode.numbers.status.episode.title": "{EPISODE_TITLE}",
          "loading.episode.title":
            "{SEASON_ABR}:\x20E{EPISODE}\x20\u201C{TITLE}\u201D",
          "upsell.offer.button.retry": "Retry",
          "upsell.stream.info":
            "\x3Cstrong\x3E{deviceName}\x3C\x2Fstrong\x3E\x20-\x20{videoName}\x20\x28{profileName}\x29",
          "upsell.offer.button.upgrade":
            "Upgrade\x20to\x20{numStreams,\x20plural,\x20other\x20{\x23\x20screens}}",
          "upsell.offer.stop.no.customer":
            "To\x20watch\x20this\x20title,\x20stop\x20playing\x20on\x20another\x20screen.",
          "upsell.offer.title":
            "Too\x20many\x20people\x20are\x20using\x20your\x20account\x20at\x20the\x20moment.",
          "upsell.offer.stop.screen":
            "To\x20watch\x20\x3Cstrong\x3E{title}\x3C\x2Fstrong\x3E,\x20upgrade\x20your\x20plan\x20or\x20stop\x20playing\x20on\x20{numScreens,\x20plural,\x20one\x20{this\x20screen}\x20other\x20{one\x20of\x20these\x20screens}}:",
          "upsell.offer.stop.no.upgrade":
            "To\x20watch\x20\x3Cstrong\x3E{title}\x3C\x2Fstrong\x3E,\x20stop\x20playing\x20on\x20another\x20screen.",
          "upsell.offer.stop.no.screen":
            "To\x20watch\x20\x3Cstrong\x3E{title}\x3C\x2Fstrong\x3E,\x20upgrade\x20your\x20plan\x20or\x20stop\x20playing\x20on\x20another\x20screen.",
          "upsell.offer.price.duration":
            "{priceDuration,\x20select,\x20WEEKS\x20{\x2B{additionalCost}\x20a\x20week}\x20MONTHS\x20{\x2B{additionalCost}\x20a\x20month}\x20other\x20{\x2B{additionalCost}\x20per\x20billing\x20period}}",
          "upsell.offer.price.duration.pretax":
            "{priceDuration,\x20select,\x20WEEKS\x20{\x2B{additionalCost}\x20a\x20week}\x20MONTHS\x20{\x2B{additionalCost}\x20a\x20month}\x20other\x20{\x2B{additionalCost}\x20per\x20billing\x20period}}\x20\x28pre-tax\x29",
          "upsell.confirmation.current.header": "Current\x20plan:",
          "upsell.confirmation.current.header.bundles":
            "Included\x20in\x20your\x20bundle:",
          "upsell.confirmation.new.header": "New\x20plan:",
          "upsell.confirmation.new.header.upgrade": "Your\x20upgrade:",
          "upsell.confirmation.button.upgrade":
            "Upgrade\x20and\x20watch\x20now",
          "upsell.confirmation.button.cancel": "Cancel",
          "upsell.legal.disclaimer.v2":
            "You\x20agree\x20that\x20your\x20Netflix\x20membership\x20will\x20continue\x20and\x20that\x20we\x20will\x20charge\x20the\x20updated\x20monthly\x20fee\x20until\x20you\x20cancel.\x20You\x20may\x20cancel\x20at\x20any\x20time\x20to\x20avoid\x20future\x20charges.\x20To\x20cancel,\x20go\x20to\x20netflix.com\x2Fcancelplan",
          "upsell.bundles.disclaimer":
            "\x2AActual\x20price\x20may\x20be\x20lower,\x20depending\x20on\x20your\x20{partnerName}\x20package,\x20and\x20will\x20be\x20reflected\x20in\x20your\x20{partnerName}\x20bill.",
          "upsell.confirmation.streams":
            "Watch\x20on\x20{numScreens,\x20plural,\x20one\x20{1\x20screen\x20at\x20a\x20time}\x20other\x20{\x23\x20screens\x20at\x20the\x20same\x20time}}",
          "upsell.confirmation.new.price.delta": "\x2B{planPrice}",
          "upsell.confirmation.new.date":
            "You\x20won\x27t\x20be\x20charged\x20until\x20{date}",
          "upsell.confirmation.title":
            "Confirm\x20your\x20upgrade\x20to\x20watch\x20now.",
          "upsell.newBillingDate.disclaimer":
            "Your\x20new\x20plan\x20starts\x20now.\x20You\u2019ll\x20pay\x20{planPrice}\x2Fmonth\x20starting\x20{billingDate}.",
          "upsell.newBillingDate.disclaimer.vague":
            "Your\x20new\x20plan\x20starts\x20now.\x20You\u2019ll\x20pay\x20{planPrice}\x2Fmonth\x20on\x20your\x20next\x20billing\x20date.",
          "upsell.error.paragraph":
            "We\x20are\x20unable\x20to\x20upgrade\x20you\x20at\x20the\x20moment.\x20Please\x20try\x20again\x20later.",
          "upsell.error.title": "Sorry,\x20there\x27s\x20been\x20an\x20error.",
          "mobile.only.upsell.offer.title":
            "Would\x20you\x20like\x20to\x20watch\x20here\x3F",
          "mobile.only.upsell.offer.description":
            "Upgrade\x20to\x20our\x20{planName}\x20plan\x20for\x20an\x20additional\x20{additionalCost}\x2Fmonth\x20to\x20start\x20watching\x20here.\x20With\x20your\x20current\x20plan,\x20you\x20can\x20watch\x20on\x20your\x20phone\x20and\x20tablet.",
          "mobile.only.upsell.offer.description.pretax":
            "Upgrade\x20to\x20our\x20{planName}\x20plan\x20for\x20an\x20additional\x20{additionalCost}\x2Fmonth\x20\x28pre-tax\x29\x20to\x20start\x20watching\x20here.\x20With\x20your\x20current\x20plan,\x20you\x20can\x20watch\x20on\x20your\x20phone\x20and\x20tablet.",
          "mobile.only.upsell.offer.button.upgrade":
            "UPGRADE\x20TO\x20{planNameUpperCase}",
          "mobile.only.upsell.offer.button.cancel": "NO\x20THANKS",
          "mobile.only.upsell.no.offer.paragraph":
            "Your\x20mobile\x20plan\x20doesn\u2019t\x20include\x20watching\x20here,\x20but\x20you\x20can\x20watch\x20all\x20you\x20want\x20on\x20your\x20mobile\x20device.\x20Just\x20download\x20the\x20Netflix\x20app.",
          "mobile.only.upsell.no.offer.title":
            "Grab\x20your\x20phone\x20or\x20tablet\x20to\x20watch",
          "mobile.only.upsell.no.offer.cta": "OK",
          "mobile.only.upsell.confirmation.current.header":
            "Current\x20plan:\x20{planName}",
          "mobile.only.upsell.confirmation.current.price":
            "{planPrice}\x2Fmonth",
          "mobile.only.upsell.confirmation.current.price.pretax":
            "{planPrice}\x2Fmonth\x20\x28pre-tax\x29",
          "mobile.only.upsell.confirmation.new.header":
            "New\x20plan:\x20{planName}",
          "mobile.only.upsell.confirmation.new.price": "{planPrice}\x2Fmonth",
          "mobile.only.upsell.confirmation.new.price.pretax":
            "{planPrice}\x2Fmonth\x20\x28pre-tax\x29",
          "ads.info.ad.text": "Advert",
          "ads.count.of": "{CURRENT}\x20of\x20{TOTAL}",
          "ads.begins.after.ad": "{TITLE}\x20begins\x20after\x20adverts",
          "ads.resumes.after.ad": "{TITLE}\x20resumes\x20after\x20adverts",
          Dn82AL: "Live",
          dsERcI: "Watch\x20live",
          rAo4X7: "Previously\x20streamed\x20live",
          I1hNX4: "You\u2019re\x20watching\x20live.",
          "3ugTk8": "Edited\x20from\x20a\x20previous\x20livestream",
          "status.bar.episodic.single.season":
            "\x3Ch4\x3E{SHOW_TITLE}\x3C\x2Fh4\x3E\x3Cspan\x3EE{EPISODE_NUMBER}\x3C\x2Fspan\x3E\x3Cspan\x3E{EPISODE_TITLE}\x3C\x2Fspan\x3E",
          "button.pop.out.player.close": "Close\x20pop-out\x20player\x20window",
          "episode.selector.youre-watching.caps.label": "YOU\x27RE\x20WATCHING",
          "rap.moredetails.heading.v2": "Select\x20all\x20that\x20apply:",
          "rap.moredetails.prompt.v2":
            "Can\x27t\x20see\x20your\x20issue\x3F\x20Have\x20more\x20details\x3F\x20Add\x20it\x20here.\x20\x28Optional\x29",
          "rap.submit.button": "Send",
          "rap.success.heading": "Thanks\x21\x20We\x27re\x20on\x20it.",
          "rap.success.subheading":
            "Your\x20feedback\x20helps\x20us\x20make\x20Netflix\x20better\x20for\x20everyone.",
          "rap.error.heading":
            "We\x27re\x20sorry.\x20Something\x20went\x20wrong.",
          "rap.categories.heading.v2": "What\x27s\x20the\x20issue\x3F",
          "rap.categories.connection.heading": "Buffering\x20\x26\x20loading",
          "rap.categories.connection.subheading.v2":
            "The\x20video\x20is\x20blurry,\x20buffering\x20or\x20not\x20loading.",
          "rap.categories.connection.help.text.v2":
            "For\x20problems\x20loading\x20video\x20or\x20streaming,\x20find\x20solutions\x20at\x20the\x20Netflix\x20Help\x20Centre.",
          "rap.categories.connection.help.control.v2":
            "Go\x20to\x20the\x20Netflix\x20Help\x20Centre",
          "rap.categories.connection.help.moredetails.prompt":
            "Have\x20more\x20details\x3F\x20Add\x20it\x20here.\x20\x28Optional\x29",
          "rap.categories.subtitles.heading": "Subtitles\x20\x26\x20captions",
          "rap.categories.subtitles.subheading.v2":
            "The\x20subtitles\x20or\x20captions\x20don\x27t\x20seem\x20to\x20be\x20working\x20correctly.",
          "rap.categories.av.heading": "Audio\x20\x26\x20video",
          "rap.categories.av.subheading":
            "It\x27s\x20hard\x20to\x20hear\x20or\x20view\x20the\x20video.",
          "rap.categories.somethingelse.heading.v2": "Another\x20issue",
          "rap.categories.somethingelse.subheading.v2":
            "There\x27s\x20something\x20else\x20that\x27s\x20wrong\x20with\x20the\x20programme\x20or\x20film.",
          "rap.issues.subtitles.translation.v2":
            "The\x20subtitles\x20or\x20captions\x20contain\x20errors\x20\x28e.g.\x20spelling,\x20punctuation,\x20grammar\x20or\x20incorrect\x20translations\x29.",
          "rap.issues.subtitles.sync":
            "The\x20subtitles\x20or\x20captions\x20don\x27t\x20match\x20the\x20audio.",
          "rap.issues.subtitles.display":
            "The\x20subtitles\x20or\x20captions\x20aren\x27t\x20appearing\x20correctly\x20\x28e.g.\x20moving\x20too\x20fast\x20or\x20not\x20changing\x20with\x20the\x20audio\x29.",
          "rap.issues.subtitles.language":
            "The\x20subtitles\x20or\x20captions\x20aren\x27t\x20available\x20in\x20the\x20language\x20I\x20want.",
          "rap.issues.av.sync.v2":
            "The\x20audio\x20doesn\x27t\x20match\x20the\x20video.",
          "rap.issues.av.volume.v2":
            "The\x20audio\x20is\x20missing,\x20too\x20low,\x20too\x20loud\x20or\x20changes\x20too\x20much.",
          "rap.issues.av.audio":
            "The\x20audio\x20doesn\x27t\x20sound\x20right\x20\x28e.g.\x20cuts\x20in\x20and\x20out,\x20distorted,\x20stutters\x29.",
          "rap.issues.av.video":
            "The\x20video\x20sometimes\x20doesn\x27t\x20appear\x20or\x20looks\x20strange.",
          "rap.issues.av.dubs.v2":
            "The\x20audio\x20dubbing\x20is\x20hard\x20to\x20hear,\x20or\x20is\x20poor\x20quality.",
          "rap.issues.somethingelse.offended.v2":
            "I\x20found\x20something\x20in\x20this\x20programme\x20or\x20film\x20that\x20I\x20think\x20is\x20inappropriate.",
          "rap.issues.somethingelse.rating.v2":
            "The\x20maturity\x20rating\x20displayed\x20is\x20incorrect.",
          "rap.issues.somethingelse.order":
            "The\x20episodes\x20or\x20seasons\x20are\x20out\x20of\x20order.",
          "rap.issues.somethingelse.description.v2":
            "The\x20title\x20or\x20description\x20is\x20wrong\x20or\x20contains\x20errors.",
          "rap.issues.somethingelse.imagery.v2":
            "The\x20images\x20for\x20this\x20programme\x20or\x20film\x20are\x20incorrect,\x20misleading\x20or\x20contain\x20spoilers.",
          "rap.close.aria.label":
            "Close\x20Report\x20a\x20problem\x20dialogue\x20box",
          "rap.ads.categories.avlanguage.heading":
            "Audio,\x20visual\x20or\x20language\x20issues",
          "rap.ads.categories.avlanguage.subheading":
            "The\x20advert\x20is\x20hard\x20to\x20hear,\x20view\x20or\x20understand.",
          "rap.ads.categories.other.heading": "Another\x20issue",
          "rap.ads.categories.other.subheading":
            "Something\x20else\x20is\x20wrong\x20with\x20the\x20advert.",
          "rap.ads.issues.avlanguage.audio":
            "The\x20audio\x20doesn\x27t\x20sound\x20right.",
          "rap.ads.issues.avlanguage.video":
            "The\x20video\x20sometimes\x20doesn\x27t\x20appear\x20or\x20looks\x20strange.",
          "rap.ads.issues.avlanguage.language":
            "The\x20advert\x20is\x20not\x20playing\x20in\x20the\x20language\x20I\x20want.",
          "rap.ads.issues.other.content":
            "I\x20found\x20something\x20in\x20the\x20advert\x20to\x20be\x20inappropriate.",
          "rap.ads.issues.other.timing":
            "I\x20have\x20an\x20issue\x20with\x20where\x20or\x20when\x20the\x20advert\x20was\x20shown.",
          "rap.ads.issues.other.repeat":
            "The\x20advert\x20is\x20repeating\x20too\x20many\x20times.",
          "episode.selector.episode.title": "{EPISODE}.\x20{TITLE}",
        },
        "discovery\x2Fakira\x2FChrome": {
          "network.down.tooltip":
            "You\x27ll\x20need\x20an\x20active\x20internet\x20connection\x20to\x20play\x20films\x20and\x20TV\x20programmes\x20on\x20Netflix.\x20Please\x20reconnect\x20to\x20the\x20internet\x20to\x20continue.",
          "network.down.message":
            "You\x20are\x20not\x20connected\x20to\x20the\x20internet.",
          "network.up.message":
            "You\x20are\x20connected\x20to\x20the\x20internet\x20again.",
          "add.profile": "Add\x20Profile",
          "manage.profiles": "Manage\x20Profiles",
          "manageProfile.button.title.case.done": "Done",
          "whos.watching": "Who\x27s\x20watching\x3F",
          "edit.profiles": "Manage\x20Profiles:",
          "header.exit.profile.name": "Exit\x20{profileName}",
          "header.switch.profile.generic": "Switch\x20Profile",
          "header.exitkids": "Exit\x20Children",
          "navitem.sign.out": "Sign\x20Out",
          "header.logo.text": "Netflix",
          "header.audio.and.subtitles": "Audio\x20\x26\x20Subtitles",
          "header.browse.by.languages": "Browse\x20by\x20Languages",
          "navitem.kids": "Children",
          "account.your.account": "Account",
          "transfer.profiles": "Transfer\x20Profile",
          "account.manage.extra.members": "Manage\x20extra\x20members",
          "account.help.center": "Help\x20Centre",
          "account.sign.out": "Sign\x20out\x20of\x20Netflix",
          "header.kids": "Children",
          "header.profile.altText":
            "{profileName}\x20\u2013\x20Account\x20\x26\x20Settings",
          "profiles.list.account.label": "Account",
          "exit.profile": "Exit\x20Profile",
          "profiles.list.profiles.label": "Profiles",
          "dvd.link": "DVD",
          "system.notification.queue.add.success":
            "{TITLE}\x20was\x20added\x20to\x20your\x20List.",
          "system.notification.queue.add.inqueue":
            "{TITLE}\x20is\x20already\x20in\x20your\x20List.",
          "system.notification.queue.general.error":
            "There\x20was\x20an\x20error.\x20Please\x20try\x20again.",
          "system.notification.queue.add.error":
            "There\x20was\x20an\x20error\x20adding\x20this\x20title\x20to\x20My\x20List.",
          "system.notification.rating.success": "You\x20rated\x20{TITLE}.",
          "system.notification.rating.error":
            "There\x20was\x20an\x20error.\x20Please\x20try\x20again.",
          "suggestions.for.you": "Suggestions\x20for\x20you",
          "year.release": "Year\x20Released",
          "a.z": "A-Z",
          "z.a": "Z-A",
          "suggestions.for.you.button.title.case": "Suggestions\x20For\x20You",
          "year.release.button.title.case": "Year\x20Released",
          "sort.by": "Sort\x20by",
          genres: "Genres",
          "original.language": "Original\x20Language",
          audio: "Audio",
          dubbing: "Dubbing",
          subtitles: "Subtitles",
          "header.select.preferences": "Select\x20your\x20preferences",
          "language.label.default": "Language",
        },
        "discovery\x2Fakira\x2FCustomizationMenu": {
          "customization.previews.optionLabel": "Previews",
          "customization.previews.tooltip.on":
            "Previews\x20will\x20play\x20while\x20browsing.",
          "customization.previews.tooltip.off":
            "Previews\x20won\u2019t\x20play\x20while\x20browsing.",
          "customization.previews.reminder":
            "Previews\x20are\x20turned\x20off.",
          "customization.mute.optionLabel": "Sound",
          "customization.mute.tooltip.on":
            "Sound\x20is\x20on\x20while\x20browsing.",
          "customization.mute.tooltip.off":
            "Sound\x20is\x20off\x20while\x20browsing.",
          "customization.mute.reminder":
            "Preview\x20audio\x20is\x20turned\x20off.",
          "customization.awareness": "New\x21\x20More\x20browse\x20controls.",
          "customization.infoDensity.optionLabel": "Title\x20Details",
          "customization.infoDensity.tooltip.on.v2":
            "Summary,\x20duration\x20and\x20release\x20year\x20are\x20displayed.",
          "customization.infoDensity.tooltip.off.v2":
            "Summary,\x20duration\x20and\x20release\x20year\x20are\x20not\x20displayed.",
          "customization.infoDensity.reminder":
            "Title\x20details\x20are\x20displayed.",
        },
        "discovery\x2Fakira\x2FGallery": {
          "gallery.row.header": "Explore\x20All",
          "grid.view.label": "View\x20in\x20grid\x20view",
          "list.view.label": "View\x20in\x20list\x20view",
          "myList.label": "My\x20List",
          "results.none": "No\x20matching\x20titles\x20found.",
          "results.error":
            "Unable\x20to\x20load\x20titles\x20at\x20the\x20moment.\x20Please\x20try\x20again\x20later.",
          "results.mylist.none":
            "You\x20haven\x27t\x20added\x20any\x20titles\x20to\x20your\x20list\x20yet.",
        },
        "common\x2FpageTitles": {
          "page.title.titlePage": "{TITLE}\x20-\x20Netflix",
          "page.title.genrePage": "{GENRE_NAME}\x20-\x20Netflix",
          "page.title.default": "Netflix",
          "page.title.homePage": "Home\x20-\x20Netflix",
          "page.title.watchPage": "{TITLE}\x20-\x20Playback\x20-\x20Netflix",
        },
        "discovery\x2Fakira\x2FMessaging": {
          "rating.show.more.headline": "I\x20like\x20this\x20one",
          "rating.show.more.body":
            "We\x27ll\x20find\x20similar\x20suggestions\x20for\x20you.",
          "rating.show.fewer.headline": "This\x20one\x27s\x20not\x20for\x20me",
          "rating.show.fewer.body":
            "Okay,\x20we\x20won\x27t\x20suggest\x20it\x20to\x20you\x20again.",
          "rating.headline": "Thanks\x20for\x20rating,\x20{name}\x21",
          "rating.body":
            "More\x20ratings\x20mean\x20better\x20suggestions\x20for\x20you.",
          "rating.action": "Got\x20it\x21",
          "reaction.rating.header": "Rate\x20for\x20better\x20recommendations",
          "reaction.rating.header.message":
            "Your\x20feedback\x20helps\x20us\x20show\x20you\x20more\x20of\x20what\x20you\x20like\x20\x28and\x20love\x21\x29.",
          "reaction.rating.thumbsdown.message":
            "We\x20won\u2019t\x20suggest\x20this\x20to\x20you\x20again",
          "reaction.rating.thumbsup.message":
            "We\u2019ll\x20show\x20you\x20more\x20like\x20this",
          "reaction.rating.thumbswayup.message":
            "We\x20know\x20you\u2019re\x20a\x20true\x20fan\x21",
          "reaction.rating.action": "Got\x20it\x21",
          "messaging.endofgrandfathering.warn.saving.error":
            "Sorry,\x20there\x20was\x20an\x20error\x20saving\x20your\x20changes.\x20Please\x20try\x20again.",
          "payment.tease":
            "Watch\x20as\x20many\x20TV\x20programmes\x20\x26\x20films\x20as\x20you\x20want\x20\u2013\x20at\x20any\x20time,\x20anywhere.",
          "surveys.thank.you": "Thank\x20You\x21",
        },
        "discovery\x2Fakira\x2FInteractive": {
          "restart.modal.header":
            "Restarting\x20this\x20title\x20will\x20clear\x20the\x20choices\x20you\u2019ve\x20made.",
          "restart.modal.body":
            "This\x20can\u2019t\x20be\x20undone\x20and\x20will\x20start\x20the\x20story\x20at\x20the\x20beginning.",
          "restart.modal.error":
            "We\x20were\x20unable\x20to\x20clear\x20your\x20choices.\x20Please\x20try\x20again.",
          "restart.modal.action.cancel": "Cancel",
          "restart.modal.action.continue": "Continue",
        },
        "common\x2Fcommon": {
          close: "Close",
          price_month:
            "{planPricePreTax,\x20select,\x20true\x20{{planPrice}\x2Fmonth\x20\x28\x3Cnobr\x3Epre-tax\x3C\x2Fnobr\x3E\x29}\x20other\x20{{planPrice}\x2Fmonth}}",
        },
        a11y: {
          KkqHrL: "Audio\x20description\x20is\x20available",
          IE4s2B:
            "Audio\x20description\x20is\x20available\x20for\x20some\x20episodes",
          BWw8il:
            "Audio\x20description\x20and\x20subtitles\x20for\x20the\x20deaf\x20and\x20hard\x20of\x20hearing\x20are\x20available",
          "Lw\x2BXIg":
            "Subtitles\x20for\x20the\x20deaf\x20and\x20hard\x20of\x20hearing\x20are\x20available",
          "o\x2FDEjh":
            "Subtitles\x20for\x20the\x20deaf\x20and\x20hard\x20of\x20hearing\x20are\x20available\x20for\x20some\x20episodes",
        },
        "discovery\x2Fakira\x2FJawBone": {
          "watched.title.overview":
            '\x3Cb\x3E{SEASON_ABBR}:E{EPISODE_NUMBER}\x3C\x2Fb\x3E\x20"{TITLE}"',
          "episode.title.quoted": '"{TITLE}"',
          "details.descriptive.transcript.header": "Descriptive\x20Transcript",
          "details.descriptive.transcript.html":
            "Read\x20the\x20descriptive\x20transcript\x20for\x20this\x20title.",
          "details.descriptive.transcript.text":
            "Download\x20the\x20descriptive\x20transcript\x20for\x20this\x20title.",
        },
        "onboarding\x2FnewUserTutorial": {
          "tooltip.header.how.to.find.what.to.watch":
            "How\x20to\x20find\x20what\x20you\x20like\x20to\x20watch",
          "tooltip.header.how.to.stay.in.know":
            "How\x20to\x20stay\x20in\x20the\x20know",
          "tooltip.header.how.to.find.what.looking.for":
            "How\x20to\x20find\x20what\x20you\u2019re\x20looking\x20for",
          "tooltip.header.how.to.watch.wherever.1":
            "How\x20to\x20watch\x20at\x20home\x20and\x20on\x20the\x20go",
          "tooltip.description.how.to.find.what.to.watch.1":
            'Select\x20"TV\x20Programmes"\x20or\x20"Films"\x20to\x20find\x20the\x20kind\x20of\x20entertainment\x20you\u2019re\x20in\x20the\x20mood\x20for.',
          "tooltip.description.how.to.stay.in.know.1":
            "Select\x20\u201CNew\x20\x26\x20Popular\u201D\x20to\x20find\x20out\x20what\u2019s\x20coming\x20soon\x20and\x20more.",
          "tooltip.description.how.to.find.what.looking.for.1":
            'Select\x20"Search"\x20to\x20tell\x20us\x20what\x20you\x20want\x20to\x20watch.',
          "tooltip.description.how.to.watch.wherever.2":
            "You\x20can\x20use\x20Netflix\x20on\x20your\x20TV,\x20computer,\x20tablet\x20or\x20phone\x20and\x20always\x20pick\x20up\x20where\x20you\x20left\x20off.",
          "step.count.label.one": "1",
          "step.count.label.two": "2",
          "step.count.label.three": "3",
          "step.count.label.four": "4",
          "step.count.1": "{current}\x20of\x20{total}\x20tips",
          "tooltip.back": "Back",
          "tooltip.next": "Next",
          "tooltip.done": "Done",
        },
        "discovery\x2Fakira\x2FNotifications": {
          "notifications.defaults.noRecentNotifications":
            "No\x20recent\x20notifications",
          "notifications.button.text": "Notifications",
          "notifications.timestamp.today": "Today",
          "notifications.timestamp.daysAgo":
            "{num_days,\x20plural,\x20one\x20{\x23\x20day\x20ago}\x20other\x20{\x23\x20days\x20ago}}",
          "notifications.timestamp.weeksAgo":
            "{num_weeks,\x20plural,\x20one\x20{\x23\x20week\x20ago}\x20other\x20{\x23\x20weeks\x20ago}}",
          "notifications.timestamp.monthsAgo":
            "{num_months,\x20plural,\x20one\x20{\x23\x20month\x20ago}\x20other\x20{\x23\x20months\x20ago}}",
        },
        "discovery\x2Fpartials\x2Fprofiles_gate": {
          "switch.error":
            "Something\x27s\x20not\x20quite\x20right.\x20Please\x20try\x20that\x20last\x20step\x20again.",
          "switch.button.tryAgain.title.case": "Try\x20Again",
          "addProfile.tooltip.kids.1":
            "If\x20selected,\x20this\x20profile\x20will\x20only\x20see\x20TV\x20programmes\x20and\x20films\x20rated\x20for\x20ages\x2012\x20and\x20under.",
          "addProfile.tooltip.teen.1":
            "If\x20selected,\x20this\x20profile\x20will\x20only\x20see\x20TV\x20programmes\x20and\x20films\x20rated\x20for\x20ages\x2014\x20and\x20under.",
          "addProfile.tooltip.adult.1":
            "If\x20selected,\x20this\x20profile\x20can\x20view\x20all\x20content.",
          "addProfile.tooltip.rating":
            "If\x20selected,\x20this\x20profile\x20will\x20only\x20see\x20TV\x20programmes\x20and\x20films\x20rated\x20{RATING}\x20and\x20below.",
          "addProfile.kids.header": "Add\x20Children\x27s\x20Profile",
          "addProfile.header": "Add\x20Profile",
          "addProfile.subHeader":
            "Add\x20a\x20profile\x20for\x20another\x20person\x20watching\x20Netflix.",
          "addProfile.placeholder.name": "Name",
          "addProfile.label.header": "Show\x20content\x20for:",
          "addProfile.label.header.optional":
            "\x28Optional\x29\x20Show\x20content\x20for:",
          "addProfile.label.kids.for.1": "Children",
          "addProfile.label.kids": "Child\x3F",
          "addProfile.label.preteens": "Pre-teens",
          "addProfile.label.teen.1": "Teens",
          "addProfile.label.adult.1": "Adults",
          "addProfile.error.name": "Please\x20enter\x20a\x20name",
          "addProfile.error.create":
            "Sorry,\x20something\x20went\x20wrong.\x20Please\x20try\x20again.",
          "addProfile.button.continue.title.case": "Continue",
          "addProfile.button.cancel.title.case": "Cancel",
          "manageProfile.error.inappropriate.avatar":
            "Oops.\x20This\x20profile\x20icon\x20is\x20not\x20compatible\x20with\x20children\x27s\x27\x20profiles.\x20Please\x20select\x20a\x20new\x20icon.",
          "manageProfile.error.create":
            "Sorry,\x20something\x20went\x20wrong.\x20Please\x20try\x20again.",
          "manageProfile.header": "Edit\x20Profile",
          "manageProfile.placeholder.name": "Name",
          "manageProfile.error.name": "Please\x20enter\x20a\x20name",
          "manageProfile.button.title.case.save": "Save",
          "manageProfile.button.title.case.cancel": "Cancel",
          "manageProfile.button.title.case.delete": "Delete\x20Profile",
          "manageProfile.content.restrictions.1": "Maturity\x20Settings:",
          "manageProfile.profile.lock.on":
            "Profile\x20Lock\x20is\x20\x3Cstrong\x3EON\x3C\x2Fstrong\x3E",
          "manageProfile.profile.kids.title.case": "Children",
          "manageProfile.content.restrictions.edit": "Edit",
          "manageProfile.profile.gamesHandle.service.setHandle.error":
            "Sorry,\x20something\x20went\x20wrong.\x20Please\x20try\x20again.",
          "manageProfile.profile.gamesHandle.headerLabel": "Game\x20handle:",
          "manageProfile.profile.gamesHandle.descriptionLabel.v2":
            "Your\x20handle\x20is\x20a\x20unique\x20name\x20that\x20will\x20be\x20used\x20for\x20playing\x20with\x20other\x20Netflix\x20members\x20across\x20all\x20Netflix\x20Games.",
          "manageProfile.profile.gamesHandle.descriptionLabelLearnMore":
            "Learn\x20more",
          "manageProfile.profile.gamesHandle.placeholderLabel":
            "Create\x20game\x20handle",
          "manageProfile.profile.gamesHandle.checkingText": "Checking...",
          "manageProfile.profile.gamesHandle.service.checkAvailable.error":
            "Sorry,\x20something\x20went\x20wrong.\x20Please\x20try\x20again.",
          "manageProfile.profile.gamesHandle.service.currentHandle.error":
            "Sorry,\x20something\x20went\x20wrong.\x20Please\x20try\x20again.",
          "manageProfile.profile.gamesHandle.error.MIN_LENGTH":
            "Must\x20be\x20longer\x20than\x202\x20characters",
          "manageProfile.profile.gamesHandle.error.MAX_LENGTH":
            "Must\x20be\x20shorter\x20than\x2016\x20characters",
          "manageProfile.profile.gamesHandle.error.INVALID_CHARACTERS.v2":
            "Use\x20only\x20numbers\x20or\x20letters",
          "manageProfile.profile.gamesHandle.modal.section.1.imageAltText":
            "Profile\x20avatar",
          "manageProfile.profile.gamesHandle.modal.section.1.heading":
            "Your\x20name\x20in\x20games",
          "manageProfile.profile.gamesHandle.modal.section.1.paragraph":
            "Your\x20game\x20handle\x20represents\x20you\x20across\x20Netflix\x20Games.",
          "manageProfile.profile.gamesHandle.modal.section.2.gameHandle.1":
            "{gameHandle}\x20wants\x20to\x20play",
          "manageProfile.profile.gamesHandle.modal.section.2.gameHandle.2":
            "{gameHandle}\x20sent\x20an\x20invite",
          "manageProfile.profile.gamesHandle.modal.section.2.gameHandle.3":
            "{gameHandle}\x20currently\x20online",
          "manageProfile.profile.gamesHandle.modal.section.2.heading":
            "Play\x20with\x20others",
          "manageProfile.profile.gamesHandle.modal.section.2.paragraph":
            "Your\x20unique\x20game\x20handle\x20will\x20be\x20used\x20when\x20you\x20play\x20with\x20other\x20members.",
          "manageProfile.profile.gamesHandle.modal.section.3.heading":
            "Climb\x20the\x20leaderboards",
          "manageProfile.profile.gamesHandle.modal.section.3.paragraph":
            "Your\x20game\x20handle\x20will\x20allow\x20you\x20to\x20see\x20where\x20you\x20are\x20on\x20leaderboards.",
          "manageProfile.profile.gamesHandle.modal.backButton": "Back",
          "manageProfile.profile.gamesHandle.modal.nextButton": "Next",
          "manageProfile.profile.gamesHandle.modal.doneButton": "Done",
          "manageProfile.profile.gamesHandle.modal.closeButton": "close",
          "languageSelection.dropDownHeader": "Language:",
          "manageProfile.choose.icon": "Choose\x20a\x20profile\x20icon.",
          "manageProfile.change.icon": "Change\x20profile\x20icon\x3F",
          "manageProfile.icon.current": "Current",
          "manageProfile.icon.new": "New",
          "manageProfile.button.doit.title.case": "Let\x27s\x20do\x20it",
          "manageProfile.button.notyet.title.case": "Not\x20yet",
          "deleteProfile.header": "Delete\x20profile\x3F",
          "deleteProfile.button.keep.title.case": "Keep\x20Profile",
          "deleteProfile.button.delete.title.case": "Delete\x20Profile",
          "deleteProfile.warning":
            "This\x20profile\x27s\x20history\x20\u2013\x20including\x20My\x20List,\x20ratings\x20and\x20activity\x20\u2013\x20will\x20be\x20gone\x20forever,\x20and\x20you\x20won\x27t\x20be\x20able\x20to\x20access\x20it\x20again.",
          "deleteProfile.error":
            "Profile\x20operation\x20failed.\x20Please\x20try\x20again\x20later.",
        },
        "account\x2FHdToggle": {
          "playback.settings.subtitle.preferences.1": "Autoplay\x20controls",
          "playback.settings.name_autoplayEpisode.1":
            "Autoplay\x20next\x20episode\x20in\x20a\x20series\x20on\x20all\x20devices.",
          "playback.settings.name_disableVideoMerch.1":
            "Autoplay\x20previews\x20whilst\x20browsing\x20on\x20all\x20devices.",
        },
        "account\x2FProfileHub": {
          "profilehub.profileedit.page.message.no.restriction":
            "Show\x20titles\x20of\x20\x3Cb\x3Eall\x20maturity\x20ratings\x3C\x2Fb\x3E\x20for\x20this\x20profile.",
          "profilehub.contentrestrictions.page.label.no.restriction.1":
            "All\x20Maturity\x20Ratings",
          "profilehub.contentrestrictions.page.message.minimum":
            "Only\x20show\x20titles\x20rated\x20\x3Cb\x3E{CATEGORY}\x3C\x2Fb\x3E\x20for\x20this\x20profile.",
          "profilehub.contentrestrictions.page.message.category.below":
            "Only\x20show\x20titles\x20rated\x20\x3Cb\x3E{CATEGORY}\x20and\x20below\x3C\x2Fb\x3E\x20for\x20this\x20profile.",
          "profilehub.pin.prompt.error":
            "Oops,\x20wrong\x20PIN.\x20Please\x20try\x20again.",
          "profilehub.pin.prompt.lock":
            "Profile\x20Lock\x20is\x20currently\x20on.",
          "profilehub.pin.prompt.access":
            "Enter\x20your\x20PIN\x20to\x20access\x20this\x20profile.",
          "profilehub.pin.prompt.create":
            "Enter\x20{NAME}\x27s\x20PIN\x20to\x20add\x20a\x20profile.",
          "profilehub.pin.prompt.generic": "Enter\x20your\x20PIN",
        },
        "account\x2FPin": {
          "pin.page.error.invalid_entry":
            "Your\x20PIN\x20must\x20be\x204\x20numbers.",
          "pin.page.error.invalid.pin":
            "Incorrect\x20PIN.\x20Please\x20try\x20again.",
        },
        "discovery\x2Fakira\x2FHeaderTabs": {
          home: "Home",
          "tv.shows": "TV\x20Programmes",
          series: "Series",
          movies: "Films",
          "recently.added": "Recently\x20Added",
          latest: "Latest",
          "new.and.popular": "New\x20\x26\x20Popular",
          "my.list": "My\x20List",
          "character.gallery": "Characters",
          "watch.again": "Watch\x20Again",
          browse: "Browse",
        },
        "discovery\x2Fakira\x2FSearch": {
          "label.search": "Search",
          "search.placeholder": "Titles,\x20people,\x20genres",
          "search.kids.placeholder": "Titles,\x20characters,\x20genres",
          "search.clear.input": "Clear\x20input",
          "search.noresults.title":
            'Your\x20search\x20for\x20"{query}"\x20did\x20not\x20have\x20any\x20matches.',
          "search.noresults.suggestions": "Suggestions:",
          "search.noresults.keywords": "Try\x20different\x20keywords",
          "search.noresults.looking":
            "Looking\x20for\x20a\x20film\x20or\x20TV\x20programme\x3F",
          "search.noresults.try":
            "Try\x20using\x20a\x20film,\x20TV\x20programme\x20title,\x20an\x20actor\x20or\x20director.",
          "search.noresults.genre":
            "Try\x20a\x20genre,\x20such\x20as\x20comedy,\x20romance,\x20sports\x20or\x20drama.",
          "search.suggestions.label": "Explore\x20titles\x20related\x20to:",
          "search.see.all.dvd.results": "See\x20all\x20DVD\x20results",
          "search.dvd.label": "DVD\x20Results",
          "search.see.dvd.details": "SEE\x20DVD\x20DETAILS",
          "search.dvd.icon.text":
            "\x3Cspan\x3EDVD\x3C\x2Fspan\x3E\x3Cspan\x3EOnly\x3C\x2Fspan\x3E",
        },
        "account\x2FViewingActivity": {
          "viewingactivity.download.all": "Download\x20all",
        },
        "account\x2FPriceChangeUma": {
          "price.change.uma.heading":
            "Select\x20the\x20plan\x20that\x20works\x20for\x20you:",
          "price.change.uma.confirm.button": "Confirm",
          "price.change.uma.complaince.disclaimer":
            "If\x20you\x20don\x27t\x20accept\x20the\x20price\x20increase,\x20you\x20can\x20choose\x20to\x20cancel\x20your\x20membership\x20here.",
          IUFEee:
            '\x2AActual\x20price\x20may\x20be\x20lower\x20depending\x20on\x20your\x20agreement\x20with\x20{partnerName},\x20and\x20will\x20be\x20reflected\x20on\x20your\x20{partnerName}\x20bill.\x20Video\x20quality\x20depends\x20on\x20your\x20internet\x20service,\x20device\x20and\x20content\x20availability.\x20Not\x20all\x20content\x20is\x20available\x20in\x20all\x20resolutions.\x20See\x20our\x20\x3Ca\x20target\x3D"_blank"\x20href\x3D"https:\x2F\x2Fhelp.netflix.com\x2Flegal\x2Ftermsofuse"\x3ETerms\x20of\x20Use\x3C\x2Fa\x3E\x20for\x20more\x20details.',
          "price.change.uma.cancel.button": "Cancel\x20Membership",
          "price.change.uma.complaince.or": "OR",
          ijnHkl:
            "You\x20agree\x20that\x20your\x20\x3Cb\x3ENetflix\x20membership\x20will\x20continue\x20and\x20that\x20we\x20will\x20charge\x20the\x20updated\x20monthly\x20fee\x20until\x20you\x20cancel.\x20You\x20may\x20cancel\x20at\x20any\x20time\x20to\x20avoid\x20future\x20charges.\x20To\x20cancel,\x20go\x20to\x20netflix.com\x2Fcancelplan\x3C\x2Fb\x3E",
          "price.change.uma.bundles.delta.price":
            "{planPricePreTax,\x20select,\x20true\x20{{planPriceDelta}\x20extra\x2Fmonth\x2A\x20\x28pre-tax\x29}\x20other\x20{{planPriceDelta}\x20extra\x2Fmonth\x2A}}",
          "price.change.uma.bundles.included.with.partner":
            "Included\x20with\x20{PARTNER}",
          "1YaNix":
            "\x3Cb\x3EYour\x20new\x20plan\x20starts\x20now.\x3C\x2Fb\x3E\x20You\u2019ll\x20pay\x20\x3Cb\x3E{planPrice}\x3C\x2Fb\x3E\x20starting\x20{date}.",
          knfNH3:
            "\x3Cb\x3EYour\x20new\x20plan\x20starts\x20now.\x3C\x2Fb\x3E\x20You\u2019ll\x20pay\x20\x3Cb\x3E{planPrice}\x3C\x2Fb\x3E\x20on\x20your\x20next\x20billing\x20date.",
          q1fCgf:
            "{planId,select,5001\x20{You\x20have\x20selected\x20the\x20Basic\x20with\x20adverts\x20plan.}\x205200\x20{You\x20have\x20selected\x20the\x20Standard\x20with\x20adverts\x20plan.}\x20other\x20{You\x20have\x20selected\x20the\x20{PLAN_NAME}\x20plan.}}",
          "price.change.uma.watch.now.button": "Watch\x20now",
        },
        "account\x2FMobileOnlyUpsellUma": {
          "mobile.only.upsell.back.button": "Back",
          "mobile.only.upsell.uma.heading":
            "Select\x20the\x20plan\x20that\x20works\x20for\x20you:",
          "mobile.only.upsell.cancel.button": "Cancel",
          "mobile.only.upsell.confirm.button": "Confirm",
          "mobile.only.upsell.bundles.disclaimer":
            "\x2AActual\x20price\x20may\x20be\x20lower,\x20depending\x20on\x20your\x20{partnerName}\x20package,\x20and\x20will\x20be\x20reflected\x20on\x20your\x20{partnerName}\x20bill.",
          "mobile.only.upsell.uma.updated.plan":
            "Your\x20plan\x20has\x20been\x20upgraded\x20to\x20{planName}.",
          "mobile.only.upsell.uma.watch.now.button": "Watch\x20now",
        },
        "signup\x2Fads": {
          ZxAqHz:
            "\x3Cb\x3EYou\x20may\x20cancel\x20at\x20any\x20time\x20to\x20avoid\x20future\x20charges.\x20To\x20cancel,\x20go\x20to\x20netflix.com\x2Fcancelplan\x3C\x2Fb\x3E",
          LW2lEV:
            '\x3Cb\x3EBy\x20continuing,\x20you\x20agree\x20to\x20our\x20\x3Ca\x20href\x3D"{termsOfUseLink}"\x20target\x3D"_blank"\x3ETerms\x20of\x20Use\x3C\x2Fa\x3E\x20and\x20\x3Ca\x20href\x3D"{privacyStatementLink}"\x20target\x3D"_blank"\x3EPrivacy\x20Statement\x3C\x2Fa\x3E.\x20If\x20you\x20select\x20an\x20advert-supported\x20plan,\x20you\x20will\x20be\x20required\x20to\x20provide\x20your\x20date\x20of\x20birth\x20for\x20advert\x20personalisation\x20and\x20other\x20purposes\x20consistent\x20with\x20the\x20Netflix\x20Privacy\x20Statement.\x20You\x27ll\x20pay\x20{planPrice}\x2Fmonth\x20starting\x20{billingDate}.\x3C\x2Fb\x3E',
          KyhtZf:
            '\x3Cb\x3EBy\x20continuing,\x20you\x20agree\x20to\x20our\x20\x3Ca\x20href\x3D"{termsOfUseLink}"\x20target\x3D"_blank"\x3ETerms\x20of\x20Use\x3C\x2Fa\x3E\x20and\x20\x3Ca\x20href\x3D"{privacyStatementLink}"\x20target\x3D"_blank"\x3EPrivacy\x20Statement\x3C\x2Fa\x3E.\x20If\x20you\x20select\x20an\x20advert-supported\x20plan,\x20you\x20will\x20be\x20required\x20to\x20provide\x20your\x20date\x20of\x20birth\x20for\x20advert\x20personalisation\x20and\x20other\x20purposes\x20consistent\x20with\x20the\x20Netflix\x20Privacy\x20Statement.\x20You\x27ll\x20pay\x20{planPrice}\x2Fmonth\x20on\x20your\x20next\x20billing\x20date.\x3C\x2Fb\x3E',
          "5\x2FhP9w":
            'I\x20agree\x20to\x20the\x20Netflix\x20\x3Ca\x20href\x3D"{termsOfUseLink}"\x20target\x3D"_blank"\x3ETerms\x20of\x20Use\x3C\x2Fa\x3E\x20and\x20\x3Ca\x20href\x3D"{privacyStatementLink}"\x20target\x3D"_blank"\x3EPrivacy\x20Statement\x3C\x2Fa\x3E.\x20If\x20you\x20select\x20Basic\x20with\x20adverts,\x20you\x20will\x20be\x20required\x20to\x20provide\x20your\x20date\x20of\x20birth\x20for\x20advert\x20personalisation\x20and\x20other\x20purposes\x20consistent\x20with\x20the\x20Netflix\x20Privacy\x20Statement.',
          WEw3Q2:
            'I\x20agree\x20to\x20the\x20Netflix\x20\x3Ca\x20href\x3D"{termsOfUseLink}"\x20target\x3D"_blank"\x3ETerms\x20of\x20Use\x3C\x2Fa\x3E,\x20\x3Ca\x20href\x3D"{privacyStatementLink}"\x20target\x3D"_blank"\x3EPrivacy\x20Statement\x3C\x2Fa\x3E\x20and\x20that\x20I\x20am\x20over\x20{minAge}.\x20If\x20you\x20select\x20an\x20advert-supported\x20plan,\x20you\x20will\x20be\x20required\x20to\x20provide\x20your\x20date\x20of\x20birth\x20for\x20advert\x20personalisation\x20and\x20other\x20purposes\x20consistent\x20with\x20the\x20Netflix\x20Privacy\x20Statement.',
          W8FKjT: "Accept\x20and\x20continue",
          r0xuQV: "Learn\x20more.",
          T6NqEb:
            "Now,\x20let\u2019s\x20add\x20details\x20to\x20your\x20profile.",
          v3T6pJ:
            "We\x20just\x20need\x20some\x20information\x20for\x20advert\x20personalisation,\x20maturity\x20settings\x20and\x20other\x20purposes\x20consistent\x20with\x20Netflix\u2019s\x20privacy\x20statement.",
          "v17w\x2FE": "Complete\x20and\x20continue",
          vW9xgT: "Start\x20watching",
          ecoEGC:
            'I\x20agree\x20to\x20the\x20Netflix\x20\x3Ca\x20href\x3D"{TOU_LINK}"\x3ETerms\x20of\x20Use\x3C\x2Fa\x3E\x20and\x20\x3Ca\x20href\x3D"{PRIVACY_STATEMENT_LINK}"\x3EPrivacy\x20Statement\x3C\x2Fa\x3E.',
          "DRja\x2B9":
            'I\x20agree\x20to\x20the\x20Netflix\x20\x3Ca\x20href\x3D"{TOU_LINK}"\x3ETerms\x20of\x20Use\x3C\x2Fa\x3E,\x20\x3Ca\x20href\x3D"{PRIVACY_STATEMENT_LINK}"\x3EPrivacy\x20Statement\x3C\x2Fa\x3E\x20and\x20that\x20I\x20am\x20over\x20{MIN_AGE}.',
          "6o2Crg": "Date\x20of\x20birth",
          "f\x2FyoPY": "Gender",
          "dRQ1\x2FV": "Day",
          KF6tfY: "Year",
          "2qrogz": "Month",
          ZTyHHg: "Select",
          BwiUHw:
            'I\x20agree\x20to\x20provide\x20information\x20to\x20determine\x20advert\x20personalisation,\x20maturity\x20settings\x20and\x20other\x20purposes\x20consistent\x20with\x20the\x20Netflix\x20\x3Ca\x20href\x3D"{PRIVACY_STATEMENT_LINK}"\x3EPrivacy\x20Statement\x3C\x2Fa\x3E.',
          "c\x2BOzje":
            'By\x20continuing\x20you\x20agree\x20to\x20our\x20\x3Ca\x20href\x3D"{TOU_LINK}"\x3ETerms\x20of\x20Use\x3C\x2Fa\x3E\x20and\x20\x3Ca\x20href\x3D"{PRIVACY_STATEMENT_LINK}"\x3EPrivacy\x20Statement\x3C\x2Fa\x3E.',
          FcnBp1:
            "{planId,select,5001\x20{You\x20have\x20selected\x20the\x20Basic\x20with\x20adverts\x20plan.}\x205200\x20{You\x20have\x20selected\x20the\x20Standard\x20with\x20adverts\x20plan.}\x20other\x20{You\x20have\x20selected\x20the\x20{planName}\x20plan.}}",
          Dcqqk9: "There\x27s\x20a\x20problem",
          "17\x2BrAP":
            "Looks\x20like\x20something\x20went\x20wrong.\x20Let\x27s\x20give\x20it\x20another\x20try.",
          AZ3llp: "Watch\x20Now",
          PH21ZH: "Retry",
          yGspxM:
            "Choose\x20an\x20advert-free\x20plan\x20to\x20unlock\x20all\x20films\x20and\x20TV\x20programmes",
          "4RLxoq": "Confirm",
          "61GYu4":
            "You\x20agree\x20that\x20your\x20Netflix\x20membership\x20will\x20continue\x20and\x20that\x20we\x20will\x20charge\x20the\x20updated\x20monthly\x20fee\x20until\x20you\x20cancel.\x20You\x20may\x20cancel\x20at\x20any\x20time\x20to\x20avoid\x20future\x20charges.\x20To\x20cancel,\x20go\x20to\x20\x3Ccancelplanlink\x3Enetflix.com\x2Fcancelplan\x3C\x2Fcancelplanlink\x3E.",
          FKbXuN:
            "Video\x20quality\x20depends\x20on\x20your\x20internet\x20service,\x20device\x20and\x20content\x20availability.",
          ouOVmj:
            "Your\x20new\x20plan\x20starts\x20now.\x20You\u2019ll\x20pay\x20{planPrice}\x2Fmonth\x20starting\x20{date}.",
          "2hwlED":
            "Your\x20new\x20plan\x20starts\x20now.\x20You\u2019ll\x20pay\x20{planPrice}\x2Fmonth\x20on\x20your\x20next\x20billing\x20date.",
          "3YBO9m": "Your\x20new\x20plan\x20starts\x20now.",
          pUfbtw: "{planPrice}\x2Fmonth",
        },
        "signup\x2Fpricetiering": {
          text_1_stream_name: "Basic",
          text_2_stream_name: "Standard",
          text_4_stream_name: "Premium",
          text_ultra_name: "Ultra",
        },
        "account\x2FChangePlan": {
          IoJyFD:
            "By\x20clicking\x20\u201C{BUTTON_TEXT}\u201D,\x20you\x20agree\x20that\x20your\x20\x3Cstrong\x3ENetflix\x20membership\x20will\x20automatically\x20continue\x20and\x20that\x20the\x20additional\x20charge\x20for\x20{PLAN}\x20will\x20be\x20charged\x20to\x20your\x20{PARTNER}\x20bill\x20until\x20you\x20cancel.\x20You\x20may\x20downgrade\x20at\x20any\x20time\x20to\x20avoid\x20future\x20additional\x20charges\x20by\x20contacting\x20{PARTNER}.\x3C\x2Fstrong\x3E",
          NdtqIj:
            "Your\x20new\x20plan\x20starts\x20now.\x20By\x20clicking\x20\u201C{BUTTON_TEXT}\u201D,\x20you\x20agree\x20that\x20your\x20\x3Cstrong\x3ENetflix\x20membership\x20will\x20automatically\x20continue\x20and\x20that\x20the\x20additional\x20charge\x20for\x20{PLAN}\x20will\x20be\x20charged\x20to\x20your\x20{PARTNER}\x20bill\x20until\x20you\x20cancel.\x20You\x20may\x20downgrade\x20at\x20any\x20time\x20to\x20avoid\x20future\x20additional\x20charges\x20by\x20contacting\x20{PARTNER}.\x3C\x2Fstrong\x3E",
          YTRlo4:
            "Your\x20new\x20plan\x20starts\x20once\x20you\x20confirm\x20this\x20change.\x20By\x20clicking\x20\u201C{BUTTON_TEXT}\u201D,\x20you\x20agree\x20that\x20your\x20\x3Cstrong\x3ENetflix\x20membership\x20will\x20automatically\x20continue\x20and\x20that\x20the\x20additional\x20charge\x20for\x20{PLAN}\x20will\x20be\x20charged\x20to\x20your\x20{PARTNER}\x20bill\x20until\x20you\x20cancel.\x20You\x20may\x20downgrade\x20at\x20any\x20time\x20to\x20avoid\x20future\x20additional\x20charges\x20by\x20contacting\x20{PARTNER}.\x3C\x2Fstrong\x3E",
        },
        "account\x2FcollectPhoneNumber": {
          "error.tryLater":
            "Sorry,\x20we\u2019re\x20having\x20trouble\x20with\x20your\x20request.\x20You\x20can\x20try\x20again\x20later.",
          "headline.phoneNumberForm.v1":
            "We\u2019ll\x20send\x20you\x20a\x20code\x20to\x20verify\x20this\x20number.\x20Message\x20and\x20data\x20rates\x20may\x20apply.",
          "cta.addPhoneNumber.v1": "Add\x20phone\x20number",
          "cta.remindMeLater.v1": "Remind\x20me\x20later",
          "placeholder.yourPhoneNumber.v1": "Your\x20phone\x20number",
          "form.phoneInput.error.invalid_phone":
            "Please\x20enter\x20a\x20valid\x20phone\x20number.",
          "headline.somethingWentWrong":
            "Looks\x20like\x20something\x20went\x20wrong",
          "cta.backToHome": "Back\x20to\x20Netflix",
          "headline.verifyPhoneForm.v1":
            "Please\x20enter\x20the\x20code\x20we\x20texted\x20to\x20{PHONE_NUMBER}.",
          "cta.verify.v1": "Verify",
          "cta.resend.v1": "Resend\x20Code",
          "cta.dismiss.v1": "Do\x20it\x20later",
          "form.verifyCode.error.codeExpired":
            "That\x20code\x20has\x20expired.\x20Please\x20enter\x20the\x20most\x20recent\x20code\x20or\x20request\x20a\x20new\x20one.",
          "form.verifyCode.error.invalidMatch":
            "Unfortunately,\x20that\x20doesn\x27t\x20match.\x20Please\x20enter\x20the\x20code\x20sent\x20to\x20{PHONE_NUMBER}.",
          "message.verified.v1":
            "Your\x20number\x20has\x20been\x20added\x20and\x20verified.\x20Change\x20it\x20in\x20your\x20account\x20settings\x20at\x20any\x20time.",
          "message.unverified.v1":
            "Your\x20number\x20has\x20been\x20added.\x20Change\x20it\x20in\x20your\x20account\x20settings\x20at\x20any\x20time.",
        },
        "account\x2FAccountSharing": {
          verify_title_20220401: "Enter\x20your\x20verification\x20code",
          verify_incorrect_code_title:
            "That\x20code\x20didn\x27t\x20work.\x20You\x20can\x20try\x20again\x20or\x20request\x20a\x20new\x20one.",
          verify_subtitle_20220401:
            "We\x27ve\x20sent\x20instructions\x20to\x20\x3Cb\x3E{currentInfo}\x3C\x2Fb\x3E.",
          verify_expiration_text:
            "Your\x20code\x20expires\x20after\x20{expiryInMinutes}\x20minutes.",
          verify_incorrect_code_subtitle:
            "Codes\x20expire\x20after\x20{expiryInMinutes}\x20minutes.",
          verify_continue_cta: "Continue",
          verify_resend_cta: "Send\x20Again",
          verify_try_another_cta: "Try\x20another\x20way",
          verify_questions_text_20210520:
            "Questions\x3F\x20Call\x20Netflix\x20on\x20\x3Cb\x3E{csPhoneNumber}\x3C\x2Fb\x3E.",
          verify_reference_text_20210520:
            "Reference:\x20\x3Cb\x3E{csReferenceId}\x3C\x2Fb\x3E",
          verify_expired_code_title: "That\x20code\x20expired",
          verify_expired_code_subtitle:
            "Please\x20request\x20a\x20new\x20one\x20below.",
          verify_back_cta: "Back",
          verify_questions_website_text_20210520:
            "Questions\x3F\x20Please\x20visit\x20the\x20\x3Cb\x3EHelp\x20Centre\x3C\x2Fb\x3E.",
          uma_max_entries_error:
            "That\x20code\x20didn\x27t\x20work.\x20We\x27ll\x20try\x20to\x20verify\x20this\x20account\x20again\x20in\x20{nextNudgeHours}\x20hours.",
          uma_max_resends_error:
            "Sorry,\x20you\x20can\x27t\x20request\x20any\x20more\x20codes\x20today",
          uma_max_challenges_error:
            "We\x27ll\x20try\x20to\x20verify\x20this\x20account\x20again\x20in\x20{nextNudgeHours}\x20hours",
          uma_max_resends_error_subtitle:
            "We\x27ll\x20try\x20to\x20verify\x20this\x20account\x20again\x20in\x20{nextNudgeHours}\x20hours.",
          verify_continue_to_netflix_cta: "Continue\x20to\x20Netflix",
          uma_not_yours_title: "Not\x20your\x20account\x3F",
          uma_not_yours_subtitle:
            "Start\x20enjoying\x20your\x20own\x20Netflix\x20today.",
          uma_join_now_cta: "Join\x20Now",
          offer_title_v2: "Enjoy\x20your\x20own\x20Netflix\x20straight\x20away",
          offer_detail_item1:
            "Create\x20up\x20to\x205\x20profiles\x20for\x20people\x20who\x20live\x20with\x20you.",
          offer_detail_item2:
            "Stream\x20unlimited\x20entertainment\x20and\x20download\x20to\x20watch\x20offline.",
          offer_detail_item3:
            "Never\x20ask\x20for\x20a\x20password\x20or\x20verification\x20code\x20again.",
          offer_cta_label: "Create\x20an\x20account",
          offer_back_button_label: "Back",
        },
        "_a\x2Fcomponents_uma": {
          "7U4t0H":
            "Questions\x3F\x20Visit\x3Cwebsitelink\x3E\x3C\x2Fwebsitelink\x3E",
          PQOh3K:
            "This\x20page\x20will\x20not\x20refresh\x20if\x20you\x20resend\x20the\x20email.",
          "9UXxMU":
            "This\x20page\x20will\x20not\x20refresh\x20if\x20you\x20resend\x20the\x20text.",
          bxSV8M:
            "You\x20don\u2019t\x20have\x20any\x20more\x20attempts.\x20Please\x20try\x20again\x20later.",
          qd81ev:
            "You\x20can\u2019t\x20request\x20any\x20more\x20codes\x20today.\x20Please\x20try\x20again\x20later.",
          "yr\x2BdQh":
            "Sorry,\x20you\x20can\u2019t\x20request\x20any\x20more\x20codes\x20today.",
          "EjH\x2BJ3": "Please\x20try\x20again\x20later.",
          "7PyhRD":
            "Only\x20people\x20who\x20live\x20with\x20you\x20may\x20use\x20your\x20account.\x20Watch\x20on\x204\x20different\x20devices\x20at\x20the\x20same\x20time\x20with\x20Premium,\x202\x20with\x20Standard\x20and\x201\x20with\x20Basic\x20or\x20Basic\x20with\x20adverts.",
          c8AoAI:
            "Only\x20people\x20who\x20live\x20with\x20you\x20may\x20use\x20your\x20account.\x20Watch\x20on\x204\x20different\x20devices\x20at\x20the\x20same\x20time\x20with\x20Premium,\x202\x20with\x20Standard\x20or\x20Standard\x20with\x20adverts,\x20and\x201\x20with\x20Basic.",
          DZgpLo:
            "\x2AActual\x20price\x20may\x20be\x20lower\x20depending\x20on\x20your\x20agreement\x20with\x20{partnerName},\x20and\x20will\x20be\x20reflected\x20on\x20your\x20{partnerName}\x20bill.\x20Video\x20quality\x20depends\x20on\x20your\x20internet\x20service,\x20device\x20and\x20content\x20availability.",
          "2Ds3Lt":
            "\x2AActual\x20price\x20may\x20be\x20lower\x20depending\x20on\x20your\x20agreement\x20with\x20{partnerName},\x20and\x20will\x20be\x20reflected\x20on\x20your\x20{partnerName}\x20bill.\x20Only\x20people\x20who\x20live\x20with\x20you\x20may\x20use\x20your\x20account.\x20Watch\x20on\x204\x20different\x20devices\x20at\x20the\x20same\x20time\x20with\x20Premium,\x202\x20with\x20Standard\x20and\x201\x20with\x20Basic\x20or\x20Basic\x20with\x20adverts.\x20Video\x20quality\x20depends\x20on\x20your\x20internet\x20service,\x20device\x20and\x20content\x20availability.",
        },
        "signup\x2Fcommon": { header_signout: "Sign\x20Out" },
        "discovery\x2Fakira\x2FFooter": {
          "link.audioDescription": "Audio\x20Description",
          "link.audioAndSubtitles": "Audio\x20and\x20Subtitles",
          "link.giftCard": "Gift\x20Cards",
          "link.helpCenter": "Help\x20Centre",
          "link.jobs": "Jobs",
          "link.mediaCenter": "Media\x20Centre",
          "link.blog": "Blog",
          "link.investors": "Investor\x20Relations",
          "link.privacy": "Privacy",
          "link.cookies": "Cookie\x20Preferences",
          "link.tou": "Terms\x20of\x20Use",
          "link.jpTransactions":
            "Act\x20on\x20Specified\x20Commercial\x20Transactions",
          "link.updatedLink": "Updated",
          "link.corporateInformation": "Corporate\x20Information",
          "link.impressum": "Impressum",
          "link.legalNotices": "Legal\x20Notices",
          "link.contactUs": "Contact\x20Us",
          copyright: "\u00A9\x201997-{currentYear}\x20Netflix,\x20Inc.",
          serviceCode: "Service\x20Code",
        },
        "_a\x2Fcomponents": {
          uoIQMI: "Netflix\x20Shop",
          QRwOg0:
            "Do\x20not\x20sell\x20or\x20share\x20my\x20personal\x20information",
        },
        "common\x2FfooterResponsive": {
          "footer.responsive.disclaimer.kr.update2019.csphone":
            "Netflix\x20Services\x20Korea\x20Ltd.\x20E-Commerce\x20Registration\x20Number:\x20Je\x202018-Seoul\x20Jong-ro-0426\x20Ho.\x20Phone:\x20{SUPPORT_NUMBER}",
          "footer.responsive.disclaimer.kr.rep_email": "Email:\x20{REP_EMAIL}",
          "footer.responsive.disclaimer.kr.rep_name":
            "Representative:\x20Reginald\x20Shawn\x20Thompson",
          "footer.responsive.disclaimer.kr.address":
            "Address:\x2020F,\x20Tower\x20A,\x20Centropolis\x20Building\x2026,\x20Ujeongguk-ro,\x20Jongno-gu,\x20Seoul,\x2003161\x20Republic\x20of\x20Korea",
          "footer.responsive.disclaimer.kr.business_registration":
            "Business\x20registration\x20number:\x20165-87-00119",
          "footer.responsive.disclaimer.kr.hosted_by":
            "Hosted\x20by:\x20Amazon\x20Web\x20Services\x20Inc.",
          "footer.responsive.disclaimer.kr.link_kftc.v3":
            '\x3Ca\x20href\x3D"http:\x2F\x2Fwww.ftc.go.kr\x2FbizCommPop.do\x3Fwrkr_no\x3D1658700119"\x3EKFTC\x20website\x3C\x2Fa\x3E',
        },
        "discovery\x2Fakira\x2FWatchAgain": {
          "embedded.gallery.seeMore": "See\x20More",
          "embedded.gallery.collapse": "Collapse",
        },
        "discovery\x2Fakira\x2FContainerPageEvidence": {
          "evidence.actions.playPreview": "Play\x20preview",
        },
        "core\x2Fnfse": {
          header: "Netflix\x20Site\x20Error",
          "body.copy":
            "We\x20were\x20unable\x20to\x20process\x20your\x20request.",
          "body.copy2":
            "Please\x20go\x20to\x20the\x20Netflix\x20home\x20page\x20by\x20clicking\x20the\x20button\x20below.",
          "button.home": "Netflix\x20Home",
        },
        "discovery\x2Fakira\x2FMdx": {
          "mdx-stop": "Stop",
          "mdx-postplay-status": "Up\x20next\x20on\x20{DEVICE_NAME}:",
          "mdx2-description-loading": "Loading\x20on\x20{DEVICE_NAME}:",
          "mdx2-description-paused": "Paused\x20on\x20{DEVICE_NAME}:",
          "mdx2-description-playing": "Playing\x20on\x20{DEVICE_NAME}:",
          "mdx-loading-show-title":
            "S{SEASON}:\x20E{EPISODE}\x20\u201C{TITLE}\u201D",
          "mdx-device-connected": "Ready\x20to\x20cast\x20on\x20{DEVICE_NAME}",
          "mdx-device-connected-instruction":
            "Play\x20any\x20title\x20to\x20begin\x20casting",
          "mdx-playback-unavailable-branching-watch-here": "WATCH\x20HERE",
          "mdx-playback-unavailable-branching-cancel": "CANCEL",
          "mdx-playback-unavailable-branching-title":
            "Casting\x20is\x20unavailable",
          "mdx-playback-unavailable-branching-message":
            "This\x20special\x20episode\x20requires\x20you\x20to\x20watch\x20on\x20your\x20computer\x20to\x20make\x20choices.",
          "mdx-postplay-prompt": "PLAY\x20NEXT",
        },
        "discovery\x2Fwarnings": {
          "profile.mismatch.title": "Something\x20went\x20wrong.",
          "profile.mismatch.message":
            "Refresh\x20to\x20start\x20enjoying\x20Netflix\x20again.\x20We\x27ll\x20wait\x20for\x20you.",
          "profile.mismatch.action": "REFRESH",
        },
        "core\x2Fnfse-v2": {
          "nfse.header": "Something\x20went\x20wrong",
          "nfse.body":
            "Sorry,\x20we\x27re\x20having\x20trouble\x20with\x20your\x20request.\x20You\x27ll\x20find\x20loads\x20to\x20explore\x20on\x20the\x20home\x20page.",
          ctaButtonHome: "Netflix\x20Home",
          ctaButtonHelp: "Learn\x20More",
          errorCode:
            "Error\x20Code\x20\x3Cstrong\x3E{errorCode}\x3C\x2Fstrong\x3E",
          imageSource: "FROM\x20\x3Cstrong\x3E{title}\x3C\x2Fstrong\x3E",
          imageSourceNailedIt: "NAILED\x20IT\x21",
          ctaButtonLogout: "Sign\x20Out",
          ctaButtonUpgrade: "Upgrade",
          upgradeHeader: "Upgrade\x20to\x20continue\x20watching",
          ctaButtonNotNow: "Not\x20now",
          ctaButtonOk: "OK",
          imageSourceMindHunter: "MINDHUNTER",
        },
        "discovery\x2Fakira\x2FNotificationLanding": {
          "notification.landing.back.to.home": "BACK\x20TO\x20HOME",
        },
      },
    },
    graphql: { data: {} },
  },
};
