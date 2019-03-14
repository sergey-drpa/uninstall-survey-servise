import { Component, OnInit, NgZone } from '@angular/core';
import {State} from './Quiz';
import {Answer} from './Answer';
import {Question} from './Question';
import { FsService } from '../fs.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  private data;
  public backgroundColor;
  public state: State;
  public otherAnswer: string;
  public page = 1;

  constructor(private fs: FsService, private zone: NgZone) { }

  ngOnInit() {
    const data = this.getData();

    if (this.state == null) {
      this.state = new State(data);
    }

    this.fs.incrementLoads();
  }
  selectAnswer ( answer, otherAnswer ) {
    if (answer.id === 'otherChoice') {
      answer.label = otherAnswer;
    }
    this.state.answerClick(answer);
    this.fs.postQuizAnswer(answer);

    this.page++;
  }

  getData () {
    const data = {
      'rootDomNode': 'root',
      'spinner': {
        'id': 'root-spinner',
        'color': '#FFFFFF',
        'backgroundColor': {
          'red': '131',
          'green': '203',
          'blue': '204'
        }
      },
      'form': {
        'id': 'GE09F4',
        'title': 'Could you, please, share with us your opinion?',
        'animation': 'moveRight',
        'theme': {
          'id': 'HDNbwc',
          'font': 'Lato',
          'name': 'Wavvves',
          'colors': {
            'question': '#FFFFFF',
            'answer': '#FFFFFF',
            'button': '#F9F9F9',
            'background': '#83cbcc'
          },
          'has_transparent_button': false,
          'visibility': 'public',
          'background': {
            'brightness': 0,
            'layout': 'fullscreen',
            'href': 'https://images.typeform.com/images/qtSNyE86SUN4'
          }
        },
        'workspace': {
          'href': 'https://api.typeform.com/workspaces/DLJNub'
        },
        'settings': {
          'is_public': false,
          'is_trial': true,
          'language': 'en',
          'progress_bar': 'percentage',
          'show_progress_bar': false,
          'show_typeform_branding': true,
          'meta': {
            'allow_indexing': false
          }
        },
        'thankyou_screens': [
          {
            'ref': 'default_tys',
            'title': 'Thanks for completing this typeform',
            'properties': {
              'show_button': true,
              'share_icons': false,
              'button_mode': 'redirect',
              'button_text': 'Create a *typeform*',
              'redirect_url': 'https://admin.typeform.com/powered-by?utm_campaign=GE09F4&utm_source=typeform.com-13262882-Basic&utm_medium=typeform&utm_content=typeform-thankyoubutton&utm_term=EN'
            },
            'attachment': {
              'type': 'image',
              'href': 'https://images.typeform.com/images/2dpnUBBkz2VN'
            }
          }
        ],
        'fields': [
          {
            'id': 'siU0pVJIj8MH',
            'title': 'Could you, please, share with us your opinion?',
            'sub_title': 'Why did you remove Tab Suspender?',
            'ref': '9b5d1335-cc73-47c1-b48c-a2553824ae2d',
            'next': '',
            'properties': {
              'description': 'Why did you remove Tab Suspender?',
              'randomize': false,
              'allow_multiple_selection': false,
              'allow_other_choice': true,
              'otherNext': '',
              'vertical_alignment': false,
              'choices': [
                {
                  'id': 'XStyhPM4I055',
                  'ref': '17535692-2a25-4bec-991e-3b5046c080f1',
                  'label': 'It\'s not easy to use.',
                  'next': 'HdjawEm3nlVZ'
                },
                {
                  'id': 'xaaKzLyzfu2D',
                  'ref': 'ee69671e-7520-4675-b9ec-c7c2560ac2c0',
                  'label': 'It is missing functionality I was hoping for.',
                  'next': 'HBL7cStX2GG1'
                },
                {
                  'id': 'liRtPfRHPVK0',
                  'ref': 'bf9cb3fb-d131-4b09-96c3-08d282606f47',
                  'label': 'There were technical problems.',
                  'next': 'liRtPfRHPVK0'
                },
                {
                  'id': 'LXR8wrYE4hzh',
                  'ref': '61b1972f-0268-418f-8636-30fccd3679b4',
                  'label': 'I don\'t need a suspend tool - I close the tabs manually.',
                  'next': 'thankYouScreen'
                }
              ]
            },
            'validations': {
              'required': false
            },
            'type': 'multiple_choice'
          },
          {
            'id': 'HdjawEm3nlVZ',
            'title': 'Can you, please, tell us a little bit more about complexity of use?',
            'ref': 'e74a6f2d-eabe-4523-a348-123ec484dc69',
            'properties': {
              'randomize': true,
              'allow_multiple_selection': false,
              'allow_other_choice': true,
              'vertical_alignment': true,
              'choices': [
                {
                  'id': 'Vo4s0M5xhEZE',
                  'ref': '556a4188-4c97-43b0-bf75-2d38e9ba312c',
                  'label': 'Missed \'Get Started\' tutorial'
                },
                {
                  'id': 'AjJjohWkRrFj',
                  'ref': 'eabba70d-4cc7-4243-941f-8935528feac0',
                  'label': 'Unclear menu'
                },
                {
                  'id': 'qUfNl2kl65t3',
                  'ref': '6bfb0b76-f77c-43ce-9fdb-7580628f179f',
                  'label': 'Unclear logic of work'
                },
                {
                  'id': 'jXEMPYQ4FjqV',
                  'ref': '0de57d59-6092-4672-a131-61ca7ddc34eb',
                  'label': 'Unclear settings'
                }
              ]
            },
            'validations': {
              'required': false
            },
            'type': 'multiple_choice'
          },
          {
            'id': 'HBL7cStX2GG1',
            'title': 'Can you, please, tell us a little bit more about missed functionality?',
            'ref': '48420e18-b58b-4a81-bff3-7bcca8eea77b',
            'properties': {
              'randomize': false,
              'allow_multiple_selection': false,
              'allow_other_choice': true,
              'vertical_alignment': true,
              'choices': [
                {
                  'id': 'fyXnPow9a86A',
                  'ref': 'b88ab1cb-6cdb-4244-817e-ac65e4156acc',
                  'label': 'Hotkeys'
                },
                {
                  'id': 'VfewRuHEjpb7',
                  'ref': 'eb45d21d-480c-44b2-b409-6dee6b8ced42',
                  'label': 'Tab Managment'
                },
                {
                  'id': 'tDZJCrNE4Eh5',
                  'ref': '4d7fedc2-9247-4ba5-8394-263c85e15e8b',
                  'label': 'Backup/Restore suspended tabs'
                },
                {
                  'id': 'Vlxpc4yx6ZpY',
                  'ref': '1651b8a1-ffb4-4c94-82cc-f3133e3087bd',
                  'label': 'Settings synchronization'
                }
              ]
            },
            'validations': {
              'required': false
            },
            'type': 'multiple_choice'
          },
          {
            'id': 'liRtPfRHPVK0',
            'title': 'Can you, please, tell us a little bit more about technical problems?',
            'ref': 'f44ef098-3ea8-4ff8-912e-e8d2bc1d965e',
            'properties': {
              'randomize': false,
              'allow_multiple_selection': false,
              'allow_other_choice': true,
              'vertical_alignment': true,
              'choices': [
                {
                  'id': 'OBknQYgoqlQI',
                  'ref': 'b944f80d-d5eb-48d9-8825-19ba992404ac',
                  'label': 'Tabs won\'t restore'
                },
                {
                  'id': 'fDKCylpYdG8N',
                  'ref': '186c4916-8279-42d7-9ad1-b67e7e179409',
                  'label': 'Tabs didn\'t suspends by timeout at all'
                },
                {
                  'id': 'yjxQH3kpCTna',
                  'ref': '94ae6515-dcbf-41b5-8c21-1ba436ad2d3f',
                  'label': 'Tabs didn\'t suspend some times'
                },
                {
                  'id': 'fch3jhcCV7UV',
                  'ref': '70f1cbd8-2a58-4ca7-8a84-eb375e40cc84',
                  'label': 'Whitelist problems'
                },
                {
                  'id': 'IShLdrVhbEgS',
                  'ref': '453f8951-9d3a-4362-905b-4f4d922ee02a',
                  'label': 'Settings problems'
                },
                {
                  'id': 'oHmUhARQB1gD',
                  'ref': 'ef3ce5e0-9c08-4f9b-aa7a-2093d311132e',
                  'label': 'Menu problems'
                }
              ]
            },
            'validations': {
              'required': false
            },
            'type': 'multiple_choice'
          },
          {
            'id': 'thankYouScreen',
            'ref': 'dce6c493-e8dc-4106-acf8-f721b0e5ca74',
            'title': 'Thank you for your feedback! ',
            'properties': {
              'show_button': true,
              'share_icons': true,
              'button_mode': 'reload',
              'button_text': 'again'
            }
          }
        ],
        'logic': [
          {
            'type': 'field',
            'ref': '9b5d1335-cc73-47c1-b48c-a2553824ae2d',
            'actions': [
              {
                'action': 'jump',
                'details': {
                  'to': {
                    'type': 'field',
                    'value': 'e74a6f2d-eabe-4523-a348-123ec484dc69'
                  }
                },
                'condition': {
                  'op': 'is',
                  'vars': [
                    {
                      'type': 'field',
                      'value': '9b5d1335-cc73-47c1-b48c-a2553824ae2d'
                    },
                    {
                      'type': 'choice',
                      'value': '17535692-2a25-4bec-991e-3b5046c080f1'
                    }
                  ]
                }
              },
              {
                'action': 'jump',
                'details': {
                  'to': {
                    'type': 'field',
                    'value': '48420e18-b58b-4a81-bff3-7bcca8eea77b'
                  }
                },
                'condition': {
                  'op': 'is',
                  'vars': [
                    {
                      'type': 'field',
                      'value': '9b5d1335-cc73-47c1-b48c-a2553824ae2d'
                    },
                    {
                      'type': 'choice',
                      'value': 'ee69671e-7520-4675-b9ec-c7c2560ac2c0'
                    }
                  ]
                }
              },
              {
                'action': 'jump',
                'details': {
                  'to': {
                    'type': 'field',
                    'value': 'f44ef098-3ea8-4ff8-912e-e8d2bc1d965e'
                  }
                },
                'condition': {
                  'op': 'is',
                  'vars': [
                    {
                      'type': 'field',
                      'value': '9b5d1335-cc73-47c1-b48c-a2553824ae2d'
                    },
                    {
                      'type': 'choice',
                      'value': 'bf9cb3fb-d131-4b09-96c3-08d282606f47'
                    }
                  ]
                }
              }
            ]
          },
          {
            'type': 'field',
            'ref': 'e74a6f2d-eabe-4523-a348-123ec484dc69',
            'actions': [
              {
                'action': 'jump',
                'details': {
                  'to': {
                    'type': 'thankyou',
                    'value': 'default_tys'
                  }
                },
                'condition': {
                  'op': 'always',
                  'vars': []
                }
              }
            ]
          },
          {
            'type': 'field',
            'ref': '48420e18-b58b-4a81-bff3-7bcca8eea77b',
            'actions': [
              {
                'action': 'jump',
                'details': {
                  'to': {
                    'type': 'thankyou',
                    'value': 'default_tys'
                  }
                },
                'condition': {
                  'op': 'always',
                  'vars': []
                }
              }
            ]
          },
          {
            'type': 'field',
            'ref': 'f44ef098-3ea8-4ff8-912e-e8d2bc1d965e',
            'actions': [
              {
                'action': 'jump',
                'details': {
                  'to': {
                    'type': 'thankyou',
                    'value': 'default_tys'
                  }
                },
                'condition': {
                  'op': 'always',
                  'vars': []
                }
              }
            ]
          }
        ],
        '_links': {
          'display': 'https://sergey338.typeform.com/to/GE09F4'
        }
      },
      'messages': {
        'a11y.file-upload.remove': 'Remove uploaded file',
        'a11y.label.play-video': 'Play video',
        'a11y.label.question': 'Question',
        'a11y.label.statement': 'Statement',
        'a11y.navigation.down': 'Navigate to next question',
        'a11y.navigation.up': 'Navigate to previous question',
        'block.date.placeholder.0': 'DD / MM / YYYY',
        'block.date.placeholder.day': 'DD',
        'block.date.placeholder.month': 'MM',
        'block.date.placeholder.year': 'YYYY',
        'block.dropdown.hint': 'No suggestions found',
        'block.dropdown.placeholder': 'Type or select an option',
        'block.dropdown.placeholderTouch': 'Select an option',
        'block.email.placeholder': 'Type your email here...',
        'block.fileUpload.choose': '*Choose file*',
        'block.fileUpload.drag': 'or *drag here*',
        'block.fileUpload.dropFiles': 'Drop your file here',
        'block.fileUpload.hintSize': 'Size limit: 10MB',
        'block.fileUpload.uploading': 'Uploading...',
        'block.fileUpload.uploadingProgress': 'Your file is still uploading, please wait...',
        'block.legal.accept': 'I accept',
        'block.legal.reject': 'I don’t accept',
        'block.longText.hint': '*SHIFT* + *ENTER* to make a line break',
        'block.multipleChoice.hint': 'Choose as many as you like',
        'block.multipleChoice.other': 'Other',
        'block.multipleChoice.selectionLimit.hint.noMore': 'Done!',
        'block.multipleChoice.selectionLimit.hint.selectAtLeastX': 'Choose at least {{x}}',
        'block.multipleChoice.selectionLimit.hint.selectAtLeastXMore': 'Choose at least {{x}} more',
        'block.multipleChoice.selectionLimit.hint.selectUpToX': 'You can choose up to {{x}}',
        'block.multipleChoice.selectionLimit.hint.selectUpToXMore': 'You can choose {{x}} more',
        'block.multipleChoice.selectionLimit.hint.selectXMore': 'Choose {{x}} more',
        'block.multipleChoice.selectionLimit.hint.selectXYchoices': 'Make between {{x}} and {{y}} choices',
        'block.multipleChoice.selectionLimit.hint.selectXchoices': 'Choose {{x}}',
        'block.number.placeholder': 'Type your answer here...',
        'block.payment.cardNameTitle': 'The name on your card:',
        'block.payment.cardNumberPlaceholder': '1234 1234 1234 1234',
        'block.payment.cardNumberTitle': 'Please enter your credit or debit card number:',
        'block.payment.cvcDescription': '(3 or 4 digit security number on the back of your card)',
        'block.payment.cvcNumberPlaceholder': 'CVC',
        'block.payment.cvcNumberTitle': 'The CVC number:',
        'block.payment.expiryDatePlaceholder': 'MM / YY',
        'block.payment.expiryDateTitle': 'The month and year your card expires:',
        'block.payment.expiryMonthTitle': 'Your card\'s expiry month:',
        'block.payment.expiryYearTitle': 'Your card\'s expiry year:',
        'block.payment.hintCharge': 'Your credit card will be charged:',
        'block.payment.hintStore': 'We never store your card number or CVC number',
        'block.payment.placeholder.cardName': 'Name on card',
        'block.payment.placeholder.cardNumber': 'Card number',
        'block.payment.securedBy': 'Secured by',
        'block.shortText.placeholder': 'Type your answer here...',
        'block.website.placeholder': 'https://',
        'branded-ty-button': 'Create a typeform',
        'branded-ty-description': 'Thanks for completing this typeform',
        'button.thankyou-screen.default': 'again',
        'button.welcome-screen.default': 'Start',
        'duplicated': '*Hmm...*looks like this value has already been entered by someone else',
        'image-placeholder-1': 'Upload your logo or an image / video',
        'image-placeholder-2': 'We’ll take care of the rest!',
        'invalid': '*Careful!* That value isn\'t valid. ',
        'label.action.phishing': 'Report abuse',
        'label.action.phishing-link': 'https://www.typeform.com/help/report-abuse/',
        'label.action.share': 'Check this out!',
        'label.and': '&',
        'label.branding.create': 'Create a *typeform*',
        'label.branding.motto': 'How you ask is everything',
        'label.branding.poweredby': 'Powered by *Typeform*',
        'label.branding.thankyou': 'Powered by <a  href=\'https://www.typeform.com/?{{QUERY}}\' target=\'_blank\'>Typeform</a>',
        'label.button.ok': 'OK',
        'label.button.review': 'Review',
        'label.button.submit': 'Submit',
        'label.button.submitAndPay': 'Submit & pay {{price}}',
        'label.buttonHint.default': '',
        'label.buttonHint.longText': 'press *ENTER*',
        'label.buttonNoAnswer.default': 'Continue',
        'label.error.date': 'Hmm…that date doesn\'t look valid',
        'label.error.emailAddress': 'Hmm…that email doesn\'t look valid',
        'label.error.generic': 'Oops, something went wrong!',
        'label.error.incompleteAnswer': '{{answerAmount}} answer needs completing',
        'label.error.incompleteAnswers': '{{answerAmount}} answers need completing',
        'label.error.incompleteForm': 'Some required answers are blank',
        'label.error.maxLength': 'Type no more than {{validation:max_length}} characters',
        'label.error.maxValue': 'Please enter a number lower than {{validation:max_value}}',
        'label.error.minSelection': 'Please select more choices',
        'label.error.minValue': 'Please enter a number greater than {{validation:min_value}}',
        'label.error.mustAccept': 'Please agree to the terms & conditions',
        'label.error.mustEnter': '*Oops!* Please enter a value',
        'label.error.mustSelect': '*Oops!* Please make a selection',
        'label.error.mustUpload': '*Oops!* Please upload a file',
        'label.error.number': 'Invalid number',
        'label.error.range': 'Please enter a number between {{validation:min_value}} and {{validation:max_value}}',
        'label.error.required': 'Please fill this in',
        'label.error.server': 'Server error! Your request wasn\'t completed',
        'label.error.sizeLimit': 'Your file is too big',
        'label.error.upload': 'An error occurred while uploading the file',
        'label.error.url': 'Hmm…that web address doesn\'t exist',
        'label.hint.key': ' ',
        'label.metaDescription': 'Turn data collection into an experience with Typeform. Create beautiful online forms, surveys, quizzes, and so much more. Try it for FREE.',
        'label.no.default': 'No',
        'label.no.shortcut': 'N',
        'label.paymentError.cardName': 'Please enter the name as it appears on your card',
        'label.paymentError.cardProcessingError': 'Sorry, something went wrong while processing your card. Please try again. ',
        'label.paymentError.declinedCard': 'Sorry, your card was declined. Please contact your card issuer for more information.',
        'label.paymentError.declinedTestMode': 'You card was declined as it’s a Stripe test card. Please use a different card to pay.',
        'label.paymentError.duplicateTransaction': 'Someone made a transaction with the same amount and card info recently. Check to see if you’ve already paid.',
        'label.paymentError.exceededBalance': 'Sorry, you’ve gone over your card’s balance or credit limit. Please contact your card issuer.',
        'label.paymentError.expiredCard': 'Your card has expired. Please try again with a different card.',
        'label.paymentError.incompleteCardNumber': 'Your card number is incomplete \n',
        'label.paymentError.incompleteCvc': 'Your card\'s CVC is incomplete \n',
        'label.paymentError.incompleteExpiryDate': 'Your card\'s expiration date is incomplete ',
        'label.paymentError.insufficientFunds': 'Sorry, there’s not enough money on the card. Please try again with a different card.',
        'label.paymentError.invalidAccount': 'The card or account is invalid. Please contact your card issuer.',
        'label.paymentError.invalidAmount': 'The payment amount is invalid or above the amount allowed by your card. Please contact your card issuer.',
        'label.paymentError.invalidCardNumber': 'The card number is incorrect',
        'label.paymentError.invalidCvc': 'The CVC is incorrect',
        'label.paymentError.invalidExpiryYear': 'The expiration year is incorrect',
        'label.paymentError.invalidZip': 'The ZIP/postal code is incorrect ',
        'label.paymentError.issuerProcessingError': 'Sorry, the issuer couldn’t process your card. Please try again, or contact your card issuer.',
        'label.paymentError.pastExpiryMonth': 'Your card\'s expiration month is in the past',
        'label.paymentError.pastExpiryYear': 'Your card\'s expiration year is in the past',
        'label.paymentError.stripeServiceDown': 'Sorry, Stripe couldn’t process your card as the service is down. Please try again later.',
        'label.paymentError.unauthorized': 'Sorry, the payment wasn’t authorized. Please contact your card issuer for more information.',
        'label.paymentError.unavailableIssuer': 'We couldn’t reach the card issuer to authorize the payment. Please try again, or contact your card issuer.',
        'label.paymentError.unsupportedCard': 'Sorry, your card doesn’t support this type of purchase. Please contact your card issuer.',
        'label.paymentError.unsupportedCurrency': 'Sorry, your card doesn’t support this currency. Try again with a different card, or contact your card issuer.',
        'label.progress.percent': '{{progress:percent}}% completed',
        'label.progress.proportion': '{{progress:step}} of {{progress:total}} answered',
        'label.retryLink.counter': 'We\'ll try again in {{timeout}} secs, or you can',
        'label.retryLink.retrying': 'Retrying...',
        'label.retryLink.title': ' try again now.',
        'label.warning.connection': 'Oh no, you can’t connect to the server right now',
        'label.warning.correction': 'Please correct the errors listed below',
        'label.warning.fallbackAlert': 'You\'re viewing this typeform in \'simple\' mode.\nThis is because your device is not yet supported by Typeform. ',
        'label.warning.formUnavailable': 'The typeform {{form:name}}, is currently unavailable. Please try again in a few moments.',
        'label.warning.leavePage': 'We\'re still sending your response. If you navigate away from this page, your response might not go through. ',
        'label.warning.noContent': 'There isn\'t any content yet',
        'label.warning.phishing': 'Never submit passwords!',
        'label.warning.private': 'This form is in private mode. Please don\'t share this URL.',
        'label.warning.slowSubmission': 'Your response hasn\'t been sent yet. ',
        'label.warning.success': 'Done! Your information was sent perfectly.',
        'label.warning.trialPrivate': 'This typeform is in private mode and can only be accessed by you.',
        'label.yes.default': 'Yes',
        'label.yes.shortcut': 'Y',
        'next-validation': 'Next validation',
        'placeholder-description': 'Description text goes here...',
        'private-embed': 'This typeform is in private mode',
        'screen.thankyou-screen.socialProof.trello': 'Easy to create, visually appealing,\nTypeform is my go-to survey platform',
        'success': 'Done! Your information was sent perfectly.',
        'thankyou-screen.social-icon.title': 'Share on {{name}}'
      },
      'trackingInfo': {
        'segmentKey': '9at6spGDYXelHDdz4r0cP73b3wV1f0ri',
        'formId': 12322899,
        'accountId': 13262882,
        'accountLimitName': 'Basic',
        'userId': 13261466
      },
      'stripeToken': null,
      'showBranding': true
    };
    return data;
  }
}
