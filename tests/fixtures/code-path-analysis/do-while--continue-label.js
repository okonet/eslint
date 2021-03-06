/*expected
initial->s1_1->s1_2->s1_3->s1_4->s1_5->s1_6->s1_7->s1_8->s1_9->s1_10->s1_3->s1_6;
s1_4->s1_12->s1_2;
s1_6->s1_9;
s1_7->s1_10->s1_11->s1_12->s1_13->final;
*/
A: do {
    B: do {
        if (c) {
            continue A;
        }
        if (d) {
            continue B;
        }
        foo();
    } while (b);
} while (a);

/*DOT
digraph {
    node[shape=box,style="rounded,filled",fillcolor=white];
    initial[label="",shape=circle,style=filled,fillcolor=black,width=0.25,height=0.25];
    final[label="",shape=doublecircle,style=filled,fillcolor=black,width=0.25,height=0.25];
    s1_1[label="Program\nLabeledStatement\nIdentifier (A)\nDoWhileStatement"];
    s1_2[label="BlockStatement\nLabeledStatement\nIdentifier (B)\nDoWhileStatement"];
    s1_3[label="BlockStatement\nIfStatement\nIdentifier (c)"];
    s1_4[label="BlockStatement\nContinueStatement\nIdentifier (A)"];
    s1_5[style="rounded,dashed,filled",fillcolor="#FF9800",label="<<unreachable>>\nBlockStatement:exit"];
    s1_6[label="IfStatement\nIdentifier (d)"];
    s1_7[label="BlockStatement\nContinueStatement\nIdentifier (B)"];
    s1_8[style="rounded,dashed,filled",fillcolor="#FF9800",label="<<unreachable>>\nBlockStatement:exit"];
    s1_9[label="ExpressionStatement\nCallExpression\nIdentifier (foo)"];
    s1_10[label="Identifier (b)"];
    s1_12[label="Identifier (a)"];
    s1_11[label="DoWhileStatement:exit\nLabeledStatement:exit\nBlockStatement:exit"];
    s1_13[label="DoWhileStatement:exit\nLabeledStatement:exit\nProgram:exit"];
    initial->s1_1->s1_2->s1_3->s1_4->s1_5->s1_6->s1_7->s1_8->s1_9->s1_10->s1_3->s1_6;
    s1_4->s1_12->s1_2;
    s1_6->s1_9;
    s1_7->s1_10->s1_11->s1_12->s1_13->final;
}
*/
