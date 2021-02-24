export const data = {
    languages: [
        {
            id: 'jp',
            name: '日本語',
            definition: '定義',
            example: '例文',
            formWordLabel: "新単語",
            formDefinitionLabel: "定義",
            formExampleLabel: "例文",
            formDefinitionHelp: '後でも追加可能です。',
            formExampleHelp: '後でも追加可能です。',
            words: [
                {
                    id: 0,
                    title: '幸せ',
                    pronounce: 'しあわせ',
                    definitions: {
                        definition1: 'とても気持ちいい',
                        definition2: '嬉しいこと'
                    },
                    examples: [
                        '私は幸せに感じています。',
                        '美味しいものを食べて幸せ！'
                    ]
                },
                {
                    id: 1,
                    title: '成功する',
                    pronounce: 'せいこうする',
                    definitions: [
                        '望んでいる結果を得ること'
                    ],
                    examples: [
                        '私は必ず成功するんだ！',
                        '成功した人々の共通点'
                    ]
                }
            ]
        },
        {
            id: 'en',
            name: 'English',
            definition: 'Definitions',
            example: 'Examples',
            formWordLabel: "New Word",
            formDefinitionLabel: "Definitions",
            formExampleLabel: "Examples",
            formDefinitionHelp: 'You can add more definitions later.',
            formExampleHelp: 'You can add more examples later.',
            words: [
                {
                    id: 0,
                    title: 'pretext',
                    pronounce: 'pri-tekst',
                    definitions: {
                        definition1: 'a reason given in justification of a course of action that is not the real reason.'
                    },
                    examples: [
                        'the rebels had the perfect pretext for making their move',
                        'That was just a pretext'
                    ]
                },
                {
                    id: 1,
                    title: 'hard',
                    pronounce: 'ha-d',
                    definitions: {
                        definition1: 'solid, firm, and rigid; not easily broken, bent, or pierced.',
                        definition2: 'done with a great deal of force or strength.',
                        definition3: 'with a great deal of effort.',
                        definition4: 'so as to be solid or firm.'
                    },
                    examples: [
                        'the slate broke on the hard floor',
                        'a hard whack',
                        'they work hard at school',
                        'the mortar has set hard'
                    ]
                }
            ]
        },
    ]
};